@echo off

rem Start React server
cd D:\Projects\react\Agora-Cognito
start npm start

rem Start Django server
cd D:\Projects\react\Agora-Cognito
start python manage.py runserver