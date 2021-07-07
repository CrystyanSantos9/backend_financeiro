SEQUENCIA PARA CRIAR PROJETO
Criar o arquivo package
### npm init 

Gerencia as requisições, rotas e URLS, entre outras funcionalidades
###  npm install express 

Rodar o projeto - Inicialmente
### node app.js

Acessar o projeto no navegador 
### http://localhost:8080

Instalar o módulo para reiniciar o servidor sempre que houver alteração no código fonte, g significa globalmente
### npm install -g nodemon

Rodar o projeto usando nodemon 
### nodemon app.js 

Instalar Docker
Instalar Docker - Compse

Criar o arquivo de Dockerfile - declaração da imagem
Criar o arquivo docker-compse - declaração de build e informações do container 

Comando para build da imagem 
### docker-compose build 

Comando para execução do container com MYSQL
### docker-compose -f ./docker-compose.yml up -d 

Instalar Workbench 

Configurar Workbench para acessar o container do MYSQL

Comando para criação do banco de dados
### CREATE DATABASE cs character set utf8mb4 collate utf8mb4_unicode_ci;

Sequelize é uma biblioteca javascript que facilita o gerenciamento de um banco de dados SQL
### npm install --save sequelize

Instalar o drive do banco de dados 
### npm install --save mysql2 

