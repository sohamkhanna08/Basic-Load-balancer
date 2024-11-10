#!/bin/bash

# Number of Requests to SEND
REQUESTS=100

# URL of Load Balancer
URL="http://localhost:3000"

# Loop to send Requests
for ((i = 1; i <= REQUESTS; i++)); do
    curl $URL &
done

wait 
echo "All requests have been sent."
