const express = require('express')
const router = express.Router()

// mapeamento dos endpoint e a lógica
// Lista de pessoas para simular o banco de dados
let pessoas = [
    {
        id: 1,
        nome: "Gay irritado",
        cpf:"35912854854",
        email: "gayirrita@trveco.com",
        dataNascimento: "17/12/0004"
    },
    {
        id: 2,
        nome: "Firmino fenomeno",
        cpf:"3591365254",
        email: "comedorde@trveco.com",
        dataNascimento: "23/12/0004"
    }
]

// Criar
// - POST /pessoas
router.post('/pessoas', (req, res, next) => {

})

// Listar todos
// - GET /pessoas
router.get('/pessoas', (req, res, next) => {
    res.json(pessoas)
})

// Buscar um
// - GET /pessoas/{id}
router.get('/pessoas/:id', (req, res, next) => {
    const idRecebido = req.params.id
    const pessoa = pessoas.find(p => p.id == idRecebido)
    if(!pessoa) {
        return res.status(404).json({error: "Pessoa não encontrada!!!" })
    } 
    res.json(pessoa)

})

// editar
// - PUT /pessoas/{id}
router.put('/pessoas/:id', (req, res, next) => {
    
})

// deletar
// - DELETE /pessoas/{id}
router.delete('/pessoas/:id', (req, res, next) => {
    
})











module.exports = router