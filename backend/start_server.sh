#!/bin/bash

# Install dependencies and activate virtual environment
poetry install
poetry shell

# Start the FastAPI server using poetry run
poetry run uvicorn server.main:app --host 0.0.0.0 --port 8000 --reload