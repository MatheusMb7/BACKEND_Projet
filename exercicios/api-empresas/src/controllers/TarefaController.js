const express = require('express')
const router = express.Router()

const TarefaModel = require('../models/TarefaModel')
const { validarTarefa } = require('../../validators/TarefaValidator')
const { validarID } = require('../../validators/IDValidator')

router.get('/tarefas', async (req, res, next) => {
  const tarefas = await TarefaModel.find().populate(['funcionario','projeto'])
  res.json(tarefas)
})

router.get('/tarefas/:id', validarID, async (req, res, next) => {
  const tarefaEncontrada = await FuncionarioModel.findById(req.params.id).populate(['funcionario', 'projeto'])
  if (!tarefaEncontrada) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(tarefaEncontrada)
})

router.post('/tarefas', validarTarefa, validarID, async (req, res, next) => {
  const tarefaCadastrado = await TarefaModel.create(req.body)
  res.status(201).json(tarefaCadastrada)
})

router.put('/tarefas/:id', validarID, async (req, res, next) => {
  const id = req.params.id
  const dados = req.body
  const tarefaAtualizada = await TarefaModel.findByIdAndUpdate(id, dados, { new: true })
  if (!tarefaAtualizada) {
    return res.status(404).json({ erro: "Não encontrado" })
  }
  res.json(tarefaAtualizada)
})

router.delete('/tarefas/:id', validarID, async (req, res, next) => {
  await TarefaModel.findByIdAndDelete(req.params.id)
  res.status(204).send()
})


module.exports = router