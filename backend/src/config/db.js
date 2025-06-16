const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto_rede', 'postgres', '098321',{
    dialect: 'postgres',
    host: 'localhost'
})
module.exports = sequelize
