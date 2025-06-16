(async () => {
  const database = require('./db');
  const Usuarios = require('../models/usuarios');
  const Postagem = require('../models/postagem');

  Usuarios.hasMany(Postagem, { foreignKey: 'usuarioId' });
  Postagem.belongsTo(Usuarios, { foreignKey: 'usuarioId' });

  await database.sync(); 
})();
