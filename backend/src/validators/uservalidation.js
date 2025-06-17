const yup = require('yup');

const userValidation= yup.object({
  body: yup.object({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(6)
  })
});

module.exports = userValidation;
