#!/bin/bash

# Path to the PM2 process file
PM2_PROCESS_FILE="/var/www/applications/ozak/ecosystem.config.js"

# Stop the application
if pm2 list | grep -q 'ozak'; then
    echo "Stopping application..."
    pm2 stop "$PM2_PROCESS_FILE" --name "ozak"
    pm2 delete "$PM2_PROCESS_FILE" --name "ozak"
else
    echo "Application is not running."
fi
