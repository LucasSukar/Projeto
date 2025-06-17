const jwt = require('jsonwebtoken')
const SECRET = 'sukar'
const model = require('../models/usuarios')


exports.getUsuario = (req, res) => {
    res.send('oi')
}

exports.createUsuario = async (req, res) =>{
    const {nome, email, senha} = req.body
    const usuario = await model.create({nome,email,senha})
    if(usuario) console.log('usuario criado')
    
}