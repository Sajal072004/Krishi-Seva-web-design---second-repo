#!/bin/bash

for file in ./scrape/*.py; do
    echo "Running $file"
    python3 $file
done