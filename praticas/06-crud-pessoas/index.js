// Crio aplicação express
const express = require("express");
const app = express();

app.use(express.json());

// Conectar MongoDB
const mongoose = require("mongoose");
require('dotenv').config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME


const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=IESB`

mongoose.connect(url)
    .then(() => {
        console.log("Conectado ao banco MongoDB!!!!")
    })
    .catch(erro => {
        console.log("erro ao conectar no MongoDB: ", erro)
    })

//Model (modelo) - interface com o meu banco de dados
// Cada model representa uma collection(Tabela)
const pessoaModel = mongoose.model('Pessoas', new mongoose.Schema(
    {
        nome: String,
        idade: Number,
        dataCriacao: { type: Date, default: Date.now() }
    }
))

// CRUD
// Create
app.post('/pessoas', async (req, res, next) => {
    const pessoa = req.body
    if(!pessoa.nome || !pessoa.idade) {
        return res.status(400).json({erro: "Campos nome e idade são obrigatórios!!!"})
    }
    const pessoaCriada = await pessoaModel.create(pessoa)
    res.status(201).json(pessoaCriada)
})

// Leitura
app.get('/pessoas', async (req, res, next) => {
    const pessoas = await PessoaModel.find()
    res.json(pessoas)
  })

app.put('/pessoas/:id', async (req, res, next) => {
    const id = req.params.id
    const pessoa = req.body
    if (!pessoa.nome || !pessoa.idade) {
      return res.status(400).json({ erro: "Campos nome e idade são obrigatórios!" })
    }
    const pessoaAtualizada = await PessoaModel.findByIdAndUpdate(id, pessoa, { new: true })
    if (!pessoaAtualizada) {
      return res.status(404).json({ erro: "Pessoa não encontrada!" })
    }
    res.json(pessoaAtualizada)
  })
//  Exclusão
app.delete('/pessoas/:id', async (req, res, next) => {
    const id = req.params.id
    await pessoaModel.findByIdAndDelete(id)
    res.status(204)
})




app.listen(3000, () => {
  console.log("aplicação rodando em http://localhost:3000");
});

