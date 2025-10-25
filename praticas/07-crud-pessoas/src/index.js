const express = require('express')
const app = express()

app.use(express.json())

// conexão com a banca
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




//  rotas
const PessoaController = require('./controllers/PessoaController')
app.use(PessoaController)


app.listen(3000, () => {
    console.log("aplicação rodando em http://localhost:3000");
  });