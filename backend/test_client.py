from backend.client import UltronEyeClient
import logging
import json

if __name__ == "__main__":
    # Setup logging
    logging.basicConfig(level=logging.INFO)

    client = UltronEyeClient(server_url="http://localhost:8000")
    # Send a single report
    response = client.send_report()
    print(f"Server response: {response}")

    # Debug print extensions
    print("\nDetected AI Extensions:")
    print(json.dumps(client.extension_watcher.extensions_cache, indent=2))
