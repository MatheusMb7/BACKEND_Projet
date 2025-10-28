const express = require('express')
const router = express.Router()
// importo o modelo
const LivroModel = require('../models/LivrosModel')

// importo os validadores
const { validarNovoLivro} = require('../validators/LivroValidator')
const { validarID } = require('../validators/IDValidator')

// Rotas
// Cadastro
router.post('/livros', validarNovoLivro, async (req, res, next) => {
  const dados = req.body
  const livroCadastrado = await LivroModel.create(dados)
  res.status(201).json(livroCadastrado)
})

// Leitura
router.get('/livros', async (req, res, next) => {
  const livros = await LivroModel.find()
  res.json(pessoas)
})

router.get('/livros/:id', validarID, async (req, res, next) => {
  const livroEncontrado = await LivroModel.findById(req.params.id)
  if (!livroEncontrado) {
    return res.status(404).json({ erro: "Pessoa não econtrada!" })
  }
  res.json(livroEncontrado)
})

// Atualização
router.put('/livros/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  const novosDados = req.body
  const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novosDados, { new: true })
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Pessoa não econtrada!" })
  }
  res.json(livroAtualizado)
})

// Exclusão
router.delete('/livros/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  await LivroModel.findByIdAndDelete(id)
  res.status(204).send()
})



module.exports = router