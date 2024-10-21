#!/bin/bash

# Check how many arguments were passed
if [ "$#" -gt 3 ]; then
    echo "You can only pass a maximum of 3 arguments."
    exit 1
fi

# Display the arguments
for arg in "$@"; do
    echo "$arg"
done

