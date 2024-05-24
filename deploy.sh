#!/bin/bash

git pull origin main;

sudo php artisan key:generate --force;
php artisan config:cache;
php artisan route:cache;
php artisan view:cache;

npm install;
npm run build;
