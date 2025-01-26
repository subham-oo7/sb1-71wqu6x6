import os
import time
import json
import platform
import psutil
import uuid
import logging
import requests
from datetime import datetime
from typing import Dict, List
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
from pathlib import Path

SERVER_URL = os.getenv("SERVER_URL", "http://localhost:8000")
REPORT_INTERVAL = 30  # seconds
ORGANIZATION_ID = "001"
VERSION = "1.0.0"


class DateTimeEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, datetime):
            return obj.isoformat()
        return super().default(obj)


class EditorExtensionWatcher(FileSystemEventHandler):
    def __init__(self, client_logger):
        self.extensions_cache = {}
        self.logger = client_logger
        self.logger.info("Initializing EditorExtensionWatcher")

        # Define paths for different editors based on OS
        self.editor_paths = self._get_editor_paths()
        # Immediately scan for extensions
        self.scan_extensions()

    def _get_editor_paths(self):
        """Get editor extension paths based on OS"""
        home = Path.home()
        system = platform.system().lower()
        paths = {}

        self.logger.info(f"Detecting editor paths for system: {system}")

        if system == "darwin":  # macOS
            paths = {
                "vscode": [
                    home / "Library/Application Support/Code/User/extensions",
                    home / ".vscode/extensions",
                    # Visual Studio Code - Insiders
                    home
                    / "Library/Application Support/Code - Insiders/User/extensions",
                    # VSCodium
                    home / "Library/Application Support/VSCodium/User/extensions",
                ],
                "jetbrains": [
                    home / "Library/Application Support/JetBrains/Toolbox/apps",
                    home / "Library/Application Support/JetBrains/PyCharm2023.3",
                    home / "Library/Application Support/JetBrains/IntelliJIdea2023.3",
                    # Add other JetBrains product paths as needed
                ],
                "sublime": [
                    home / "Library/Application Support/Sublime Text 3/Packages",
                    home / "Library/Application Support/Sublime Text/Packages",
                ],
            }
        elif system == "windows":
            paths = {
                "vscode": [
                    Path(os.environ["USERPROFILE"]) / ".vscode/extensions",
                    Path(os.environ["APPDATA"]) / "Code/User/extensions",
                ],
                "jetbrains": [
                    Path(os.environ["APPDATA"]) / "JetBrains/Toolbox/apps",
                    Path(os.environ["APPDATA"]) / "JetBrains/PyCharm2023.3",
                    Path(os.environ["APPDATA"]) / "JetBrains/IntelliJIdea2023.3",
                ],
                "sublime": [
                    Path(os.environ["APPDATA"]) / "Sublime Text 3/Packages",
                    Path(os.environ["APPDATA"]) / "Sublime Text/Packages",
                ],
            }
        else:  # Linux
            paths = {
                "vscode": [
                    home / ".vscode/extensions",
                    home / ".vscode-oss/extensions",
                    home / ".config/Code/User/extensions",
                ],
                "jetbrains": [
                    home / ".local/share/JetBrains/Toolbox/apps",
                    home / ".local/share/JetBrains/PyCharm2023.3",
                    home / ".local/share/JetBrains/IntelliJIdea2023.3",
                ],
                "sublime": [
                    home / ".config/sublime-text-3/Packages",
                    home / ".config/sublime-text/Packages",
                ],
            }

        # Log found paths and check existence
        for editor, path_list in paths.items():
            for path in path_list:
                self.logger.info(
                    f"Found {editor} path: {path} (exists: {path.exists()})"
                )
                if path.exists():
                    self.logger.info(f"✓ Valid {editor} installation found at: {path}")

        return paths

    def scan_extensions(self):
        """Initial scan of all extensions"""
        self.logger.info("Starting initial extension scan")
        for editor, path_list in self.editor_paths.items():
            for path in path_list:
                if path.exists():
                    self.logger.info(f"Scanning {editor} extensions at {path}")
                    self._scan_editor_extensions(editor, path)
                else:
                    self.logger.debug(f"Path for {editor} does not exist: {path}")

        self.logger.info(
            f"Scan complete. Found {len(self.extensions_cache)} AI-related extensions"
        )
        if self.extensions_cache:
            self.logger.debug(
                f"Extensions found: {json.dumps(self.extensions_cache, indent=2)}"
            )

    def _scan_editor_extensions(self, editor, path):
        """Scan extensions for a specific editor"""
        if editor == "vscode":
            self._scan_vscode_extensions(path)
        elif editor == "jetbrains":
            self._scan_jetbrains_extensions(path)
        elif editor == "sublime":
            self._scan_sublime_extensions(path)

    def _scan_vscode_extensions(self, path):
        """Scan VS Code extensions"""
        self.logger.info(f"Scanning VS Code extensions in {path}")
        try:
            for ext_dir in path.glob("*"):
                if ext_dir.is_dir():
                    package_json = ext_dir / "package.json"
                    if package_json.exists():
                        try:
                            data = json.loads(package_json.read_text())
                            if self._is_ai_related(data):
                                self.logger.info(
                                    f"Found AI-related VS Code extension: {data.get('name')}"
                                )
                                self.extensions_cache[ext_dir.name] = {
                                    "editor": "vscode",
                                    "name": data.get("name"),
                                    "displayName": data.get("displayName"),
                                    "description": data.get("description"),
                                    "version": data.get("version"),
                                    "publisher": data.get("publisher"),
                                }
                        except Exception as e:
                            self.logger.error(
                                f"Error reading VS Code extension {ext_dir}: {e}"
                            )
        except Exception as e:
            self.logger.error(f"Error scanning VS Code extensions: {e}")

    def _scan_jetbrains_extensions(self, path):
        """Scan JetBrains plugins"""
        self.logger.info(f"Scanning JetBrains plugins in {path}")
        try:
            for product_dir in path.glob("*"):
                plugins_path = product_dir / "plugins"
                if plugins_path.exists():
                    for plugin_dir in plugins_path.glob("*"):
                        plugin_xml = plugin_dir / "META-INF/plugin.xml"
                        if plugin_xml.exists():
                            try:
                                content = plugin_xml.read_text().lower()
                                if self._is_ai_related({"description": content}):
                                    self.logger.info(
                                        f"Found AI-related JetBrains plugin: {plugin_dir.name}"
                                    )
                                    self.extensions_cache[plugin_dir.name] = {
                                        "editor": "jetbrains",
                                        "name": plugin_dir.name,
                                        "path": str(plugin_xml),
                                        "product": product_dir.name,
                                    }
                            except Exception as e:
                                self.logger.error(
                                    f"Error reading JetBrains plugin {plugin_dir}: {e}"
                                )
        except Exception as e:
            self.logger.error(f"Error scanning JetBrains plugins: {e}")

    def _scan_sublime_extensions(self, path):
        """Scan Sublime Text packages"""
        self.logger.info(f"Scanning Sublime Text packages in {path}")
        try:
            for package_dir in path.glob("*"):
                metadata = package_dir / "package-metadata.json"
                if metadata.exists():
                    try:
                        data = json.loads(metadata.read_text())
                        if self._is_ai_related(data):
                            self.logger.info(
                                f"Found AI-related Sublime package: {package_dir.name}"
                            )
                            self.extensions_cache[package_dir.name] = {
                                "editor": "sublime",
                                "name": package_dir.name,
                                "description": data.get("description"),
                                "version": data.get("version"),
                            }
                    except Exception as e:
                        self.logger.error(
                            f"Error reading Sublime package {package_dir}: {e}"
                        )
        except Exception as e:
            self.logger.error(f"Error scanning Sublime packages: {e}")

    def _is_ai_related(self, data):
        """Check if extension is AI-related"""
        ai_keywords = {
            "ai",
            "artificial intelligence",
            "machine learning",
            "copilot",
            "gpt",
            "completion",
            "claude",
            "llama",
            "code generation",
            "tabnine",
            "kite",
            "codewhisperer",
            "intellicode",
        }

        description = str(data.get("description", "")).lower()
        keywords = {str(k).lower() for k in data.get("keywords", [])}
        name = str(data.get("name", "")).lower()

        matches = any(
            keyword in description or keyword in keywords or keyword in name
            for keyword in ai_keywords
        )

        if matches:
            self.logger.debug(
                f"Found AI-related extension: {data.get('name', 'Unknown')}"
            )

        return matches

    def on_created(self, event):
        """Handle new extension installation"""
        if not event.is_directory:
            self._handle_extension_change(event.src_path, "installed")

    def on_deleted(self, event):
        """Handle extension removal"""
        if not event.is_directory:
            self._handle_extension_change(event.src_path, "removed")

    def on_modified(self, event):
        """Handle extension updates"""
        if not event.is_directory:
            self._handle_extension_change(event.src_path, "updated")

    def _handle_extension_change(self, path, action):
        """Process extension changes"""
        path = Path(path)
        for editor, base_path in self.editor_paths.items():
            if str(base_path) in str(path):
                self.logger.info(f"Extension {action} in {editor}: {path}")
                self._scan_editor_extensions(editor, base_path)
                break


class UltronEyeClient:
    def __init__(
        self, server_url=SERVER_URL, user_info=None, organization_id=ORGANIZATION_ID
    ):
        self.server_url = server_url
        self.client_id = str(uuid.uuid4())
        self.version = VERSION
        self.user_info = user_info or self.get_default_user_info()
        self.organization_id = organization_id
        print(f"Client ID: {self.client_id}")
        self.setup_logging()
        self.extension_watcher = EditorExtensionWatcher(self.logger)
        self.observer = Observer()
        self.start_extension_monitoring()

    def establish_connection(self):
        """
        Establish a connection with the server.
        """
        response = requests.get(f"{self.server_url}/api/v1/connect")
        if response.status_code == 200:
            self.logger.info("Successfully connected to the server")
        else:
            self.logger.error(
                f"Failed to connect to the server: {response.status_code}"
            )

    def get_default_user_info(self) -> Dict:
        """Get default user information from the system"""
        return {
            "username": platform.node(),
            "email": "subham@ultronlabs.com",
            "department": "IT",
            "role": "Software Engineer",
            "location": "Bangalore, India",
        }

    def setup_logging(self):
        logging.basicConfig(
            level=logging.INFO,
            format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
            filename="ultron_eye_client.log",
        )
        self.logger = logging.getLogger("UltronEyeClient")

    def collect_system_info(self) -> Dict:
        """Collect comprehensive system information"""
        cpu_cores = psutil.cpu_count(logical=True)

        return {
            "platform": platform.system().lower(),
            "platform_release": platform.release(),
            "machine": platform.machine(),
            "processor": platform.processor(),
            "cpu_cores": cpu_cores,
            "memory_total": psutil.virtual_memory().total,
            "memory_available": psutil.virtual_memory().available,
        }

    def collect_process_info(self) -> List[Dict]:
        """Collect detailed information about running processes"""
        processes = {}  # Use dict to track unique processes by name

        for proc in psutil.process_iter(
            [
                "pid",
                "name",
                "cpu_percent",
                "memory_percent",
                "status",
                "create_time",
                "cmdline",
            ]
        ):
            try:
                proc_info = proc.info
                name = proc_info["name"]

                # If we already have this process name, update the metrics
                if name in processes:
                    processes[name]["cpu_percent"] += proc_info["cpu_percent"] or 0.0
                    processes[name]["memory_percent"] += (
                        proc_info["memory_percent"] or 0.0
                    )
                    processes[name]["instance_count"] += 1
                    # Keep the earliest create time
                    if proc_info["create_time"] < processes[name]["create_time"]:
                        processes[name]["create_time"] = proc_info["create_time"]
                else:
                    # First instance of this process
                    processes[name] = {
                        "pid": proc_info["pid"],  # Keep first PID seen
                        "name": name,
                        "cpu_percent": proc_info["cpu_percent"] or 0.0,
                        "memory_percent": proc_info["memory_percent"] or 0.0,
                        "status": proc_info["status"],
                        "create_time": proc_info["create_time"],
                        "instance_count": 1,
                    }

            except (
                psutil.NoSuchProcess,
                psutil.AccessDenied,
                psutil.ZombieProcess,
            ) as e:
                self.logger.debug(f"Could not get process info: {e}")

        # Convert the dictionary to a list and format the data
        process_list = []
        for proc_data in processes.values():
            process_list.append(
                {
                    "pid": proc_data["pid"],
                    "name": proc_data["name"],
                    "cpu_percent": round(proc_data["cpu_percent"], 2),
                    "memory_percent": round(proc_data["memory_percent"], 2),
                    "status": proc_data["status"],
                    "create_time": datetime.fromtimestamp(proc_data["create_time"]),
                    "instance_count": proc_data["instance_count"],
                }
            )

        return process_list

    def start_extension_monitoring(self):
        """Start monitoring editor extensions"""
        try:
            # Initial scan
            self.extension_watcher.scan_extensions()

            # Start watching for changes
            for path in self.extension_watcher.editor_paths.values():
                if path.exists():
                    self.observer.schedule(
                        self.extension_watcher, str(path), recursive=True
                    )

            self.observer.start()
            self.logger.info("Started monitoring editor extensions")
        except Exception as e:
            self.logger.error(f"Failed to start extension monitoring: {e}")

    def generate_report(self) -> Dict:
        """Generate a complete system report"""
        boot_time = datetime.fromtimestamp(psutil.boot_time())
        uptime = (datetime.now() - boot_time).total_seconds()

        return {
            "client_id": self.client_id,
            "report_id": f"report-{uuid.uuid4()}",
            "timestamp": datetime.utcnow(),
            "version": self.version,
            "user_info": self.user_info,
            "organization_id": self.organization_id,
            "system_info": self.collect_system_info(),
            "process_list": self.collect_process_info(),
            "editor_extensions": self.extension_watcher.extensions_cache,
            "tags": ["local"],
            "environment": "local",
            "uptime": uptime,
            "last_boot_time": boot_time,
        }

    def send_report(self) -> Dict:
        """Send the system report to the server"""
        try:
            report = self.generate_report()
            self.logger.info(f"Generated report for client: {self.client_id}")
            self.logger.debug(f"Report data: {report}")

            # Convert report to JSON with datetime handling
            json_data = json.dumps(report, cls=DateTimeEncoder)

            response = requests.post(
                f"{self.server_url}/api/v1/report",
                headers={"Content-Type": "application/json"},
                data=json_data,
            )

            response.raise_for_status()

            self.logger.info(
                f"Successfully sent report. Status code: {response.status_code}"
            )
            self.logger.debug(f"Server response: {response.json()}")

            return response.json()
        except requests.exceptions.RequestException as e:
            self.logger.error(f"Failed to send report: {str(e)}")
            raise
        except Exception as e:
            self.logger.error(f"Unexpected error: {str(e)}")
            raise

    def start_monitoring(self, interval=30):
        """
        Start continuous monitoring with specified interval (default 5 minutes)
        """
        self.logger.info(f"Starting monitoring with interval of {interval} seconds")
        while True:
            try:
                self.send_report()
                time.sleep(interval)
            except KeyboardInterrupt:
                self.logger.info("Monitoring stopped by user")
                break
            except Exception as e:
                self.logger.error(f"Unexpected error: {str(e)}")
                time.sleep(60)  # Wait a minute before retrying

    def __del__(self):
        """Cleanup when the client is destroyed"""
        if hasattr(self, "observer"):
            self.observer.stop()
            self.observer.join()


if __name__ == "__main__":
    try:
        client = UltronEyeClient()
        client.establish_connection()
        client.start_monitoring()
    except Exception as e:
        print(f"Error: {e}")
