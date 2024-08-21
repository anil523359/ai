#!/bin/bash
pm2 stop  "ozakai-app" || echo "Process not found, skipping deletion"
