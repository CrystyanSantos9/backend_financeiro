const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cs', 'root', 'senha', {
    host: 'localhost',
    port: '3009',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conexão com o banco de dados realizado com sucesso!")
}).catch((err)=>{
    console.log("Erro: Conexão com o banco de dados não realizado com sucesso!")
})

module.exports = sequelize;