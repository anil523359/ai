#!/bin/bash

cd /var/www/applications/ozak/build
pm2 serve  artifacts/ 3000 --name "Ozakai-Web" --spa
