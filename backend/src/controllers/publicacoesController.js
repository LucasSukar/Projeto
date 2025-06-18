const model = require('../models/publicacoes');

exports.getPublicacoes = async (req, res) => {
  try {
    const posts = await model.findAll();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar publicações.' });
  }
};

exports.createPubli = async (req, res) => {
  try {
    const { titulo, texto, resumo } = req.body;
    const post = await model.create({
      titulo,
      texto,
      resumo,
      likes: 0,
      dataPublicacao: new Date()
    });
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao criar publicação.' });
  }
};

exports.deletPubli = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await model.findByPk(id);
    if (!post) return res.status(404).json({ mensagem: 'Publicação não encontrada.' });
    
    await post.destroy();
    res.json({ mensagem: 'Publicação deletada com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao deletar publicação.' });
  }
};
