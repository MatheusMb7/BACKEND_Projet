// importar a express
const express = require('express')

//  criar uma instância no meu backend com o express
const app = express()

// intermediários (middlewares)
//intermediario de LOG
// toda requisição vai passar por ele e imprimir no terminal
//informaações da requisição 
app.use((req, res, next) => {
console.log("Time: ", new Date().toLocaleString())
console.log("Metodo: ", req.method)
console.log("Rota: ", req.url)

next()
})
//hello World
//req -> a requisição(os dados da requisição)
//res -> manipulador de resposta
//next -> chama o proximo intermediario
//mapeamento da requisição

app.get('/hello', (req, res, next) => {
    //envio da resposta
    res.send('Hello world ATUALIZADO MEU PRIMEIRO')
})
//endpoint da minha API
app.get('/pessoas', (req, res, next) => {
    const pessoas =  [
    {
        id:1,
        nome: "Matheus Bruno"
    }, 
    {
        id:2,
        nome: "Firmino papo de mendigo"
    }
    ]

    res.json(pessoas)
})


// executar a aplicação escolhendo a porta de ela vai escutar
app.listen(3000, () => {
    console.log("Minha aplicação está rodando em htto://localhost:3000/")
})