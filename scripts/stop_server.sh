#!/bin/bash
pm2 stop  "ozakai-Web" || echo "Process not found, skipping deletion"
