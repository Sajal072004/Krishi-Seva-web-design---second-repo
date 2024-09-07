#!/bin/bash

for file in ./frontend/scrape/*.py; do
    echo "Running $file"
    python3 $file
done