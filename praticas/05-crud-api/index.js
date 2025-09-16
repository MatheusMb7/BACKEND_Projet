const express = require('express')
const app = express()

// intermediarios
const cors = require('cors')
app.use(cors())
// habilita receber json como corpo da requisição
app.use(express.json())
// LOG
app.use((req,res,next) =>{
    console.log("####### LOG de requisição ######")
    console.log("Time: ", new Date().toLocaleString())
    console.log("metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

// Roteadores
const PessoaController = require('./routes/PessoaController')
app.use(PessoaController)

// executa
app.listen(3000, () => {
    console.log("Api rodando em http://localhost:3000")
})