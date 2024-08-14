#!/bin/bash

# Path to the application directory
APP_DIR="/var/www/applications/ozak"

# Path to the PM2 process file
PM2_PROCESS_FILE="$APP_DIR/ecosystem.config.js"

# Check if the app is already running
if pm2 list | grep -q 'ozak'; then
    echo "Application is already running. Restarting..."
    pm2 restart "$PM2_PROCESS_FILE" --name "ozak"
else
    echo "Application is not running. Starting..."
    pm2 start "$PM2_PROCESS_FILE" --name "ozak"
fi
