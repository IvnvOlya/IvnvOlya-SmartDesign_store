# IvnvOlya-SmartDesign_store

Build Setup
1. В терминале запускаем MongoDB
2. % mongo --host 127.0.0.1:27017
3. Посмотреть данные в DB можно с помощью команд
4. >show dbs
5. > use blog
6. > db.posts.find()

7. В другом терминале запускаем Сервер (backend) из проекта
8. % cd backend
9. % yarn build-start

10. В другом терминале запускаем наше приложение React (my-app) из проекта
11. % cd my-app
12. % npm install
13. % npm start  
