const yup = require('yup');

const publiValidation= yup.object({
  body: yup.object({
    titulo: yup.string().min(3).required(),
    texto: yup.string().min(10).required(),
    resumo: yup.string().max(255),
    likes: yup.number().default(0),
    dataPublicacao: yup.date().required()
  })
});

module.exports = publiValidation;