#!/bin/bash
pm2 stop  "ozakai-Web" || echo "Process not found, skipping deletion"
sudo rm -rf /var/www/websites/OzakAI-Website/*
