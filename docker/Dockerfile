FROM php:8.3-fpm

# Instala dependências do sistema e extensões PHP
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    curl

RUN docker-php-ext-install pdo_mysql gd

# Define o diretório de trabalho
WORKDIR /var/www

COPY . .

# Instala o Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN chown -R www-data:www-data /var/www