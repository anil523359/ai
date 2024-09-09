#!/bin/bash

cd /var/www/websites/OzakAI-Website/
pm2 serve build 3000 --name "ozakai-Web" --spa

