const Sequelize = require('sequelize');
const sequelize = require('./db');
const db = require('./db')

const Lancamentos = db.define('lancamentos', {
    id: {
        type: Sequelize.INTEGER, 
        autoIncrement: true,  
        allowNull: false, 
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }, 
    tipo: { // 1 - despesa 2 - receita
        type: Sequelize.INTEGER,
        allowNull: false 
    },
    situacao: { // 1 - realizado 2 - pendente
        type: Sequelize.INTEGER,
        allowNull: true
    },
    dataPagamento: {
        type: Sequelize.DATE,
        allowNull: false 
    }
})

//Verifica se existe a tabela, não existindo a tabela é criado a mesa
// Lancamentos.sync();

//Verifica se houve alterações da tabela e realiza essas modificações 
// Lancamentos.sync({ alter: true });

module.exports = Lancamentos; 