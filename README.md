# IvnvOlya-SmartDesign_store

Build Setup
1. В терминале запускаем MongoDB
% mongo --host 127.0.0.1:27017
Посмотреть данные в DB можно с поомщью команд
>show dbs
> use blog
> db.posts.find()

2.В другом терминале запускаем Сервер (backend) из проекта
% cd backend
% yarn build-start

3.В другом терминале запускаем наше приложение React (my-app) из проекта
% cd my-app
% npm install
% npm start  
