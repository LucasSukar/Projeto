const Sequelize = require('sequelize')
const database = require('../config/db')


const Usuarios = database.define('usuarios',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    senha:{
        type: Sequelize.STRING,
        allowNull: false,
    },
})

module.exports = Usuarios
