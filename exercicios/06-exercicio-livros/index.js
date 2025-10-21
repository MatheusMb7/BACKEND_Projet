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
const livroModel = mongoose.model('Livros', new mongoose.Schema(
    {
        titulo: String,
        autor: String,
        editora: String,
        ano: Number,
        preco: Number,
        
    }
))

// CRUD
// Create
app.post('/livros', async (req, res, next) => {
    const livro = req.body
    if(!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco) {
        return res.status(400).json({erro: "Campos titulo, autor, editora, ano e preço são obrigatórios!!!"})
    }
    const livroCriado = await livroModel.create(livro)
    res.status(201).json(livroCriado)
})

// Leitura
app.get('/livros', async (req, res, next) => {
    const livros = await livroModel.find()
    res.json(livros)
  })

app.put('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    const livro = req.body
    if (!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco) {
      return res.status(400).json({ erro: "Campos titulo, autor, editora, ano e preço são obrigatórios!!!" })
    }
    const livroAtualizado = await livroModel.findByIdAndUpdate(id, livro, { new: true })
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado!" })
    }
    res.json(livroAtualizado)
  })

// Exclusão
  app.delete('/livros/:id', async (req, res, next) => {
    const id = req.params.id
    await livroModel.findByIdAndDelete(id)
    res.status(204).send()
  })
  
  




app.listen(3000, () => {
  console.log("aplicação rodando em http://localhost:3000");
});

