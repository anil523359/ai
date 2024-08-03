#!/bin/bash

cd /var/www/applications/ozak
pm2 serve build/ 3000 --name "Ozakai-Web" --spa