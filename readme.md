# Развёртывание

## Backend

1. Установка пакетов 
>``composer install``

2. Создание БД
>``CREATE DATABASE portfolus CHARSET=utf8 ``

3. Генерация ключа
>``php artisan key:generate ``

4. Применение миграций
>``php artisan migrate ``

5. Добавление 15 000 фейковых пользователей
>``php artisan db:seed --class=UserSeeder``

## Frontend

1. Установка пакетов
>``yarn``