const { DataTypes } = require('sequelize');
const database = require('../config/db');

const Postagem = database.define('Postagem', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  texto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  resumo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  dataPublicacao: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = Postagem;
