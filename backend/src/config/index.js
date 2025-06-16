(async ()=> {

    const database = require('./db')
    const Usuarios = require('../models/usuarios')
    await database.sync()

})()