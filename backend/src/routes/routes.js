const express = require('express')
const route = express.Router()
const usuarios = require('../controllers/usuariosController')


route.get('/', usuarios.getUsuario)

module.exports = route