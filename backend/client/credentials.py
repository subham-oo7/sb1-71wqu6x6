import json
from pathlib import Path

def load_credentials():
    creds_file = Path.home() / ".ultron" / "credentials.json"
    if creds_file.exists():
        with open(creds_file) as f:
            return json.load(f)
    return {}

def save_credentials(username: str, password: str):
    creds_dir = Path.home() / ".ultron"
    creds_dir.mkdir(exist_ok=True)
    
    with open(creds_dir / "credentials.json", "w") as f:
        json.dump({
            "username": username,
            "password": password
        }, f) 