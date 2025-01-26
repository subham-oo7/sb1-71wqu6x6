#!/bin/bash

# Install dependencies and activate virtual environmentpoetry install
poetry shell

# Start the client using poetry run
python client.py