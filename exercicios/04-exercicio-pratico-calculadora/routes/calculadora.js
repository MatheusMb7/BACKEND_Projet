// Importa o express
const express = require('express')
// Cria um roteador
const router = express.Router()

// Mapeamento das rotas e implementar a lógica
// Uma rota pra calcular a soma
router.get("/calculadora/somar", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
    const numB = parseFloat(req.query.numB)
    

    if(isNaN(numA)|| isNaN(numB)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const somar= numA + numB

    res.json({ somar})
})

// Uma rota pra calcular a subtração
router.get("/calculadora/subtrair", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
    const numB = parseFloat(req.query.numB)
    

    // valida de ele mandou os paramentros e se estão dentro do intervalo
    if(isNaN(numA)|| isNaN(numB)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const subtrair= numA - numB

    res.json({ subtrair})
})

// // Uma rota pra calcular a multiplicação

router.get("/calculadora/multiplicar", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
    const numB = parseFloat(req.query.numB)
    

    // valida de ele mandou os paramentros e se estão dentro do intervalo
    if(isNaN(numA)|| isNaN(numB)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const multiplicar= numA * numB

    res.json({ multiplicar})
})
// Uma rota pra calcular a divisão
router.get("/calculadora/dividir", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
    const numB = parseFloat(req.query.numB)
    

    // valida de ele mandou os paramentros e se estão dentro do intervalo
    if(isNaN(numA)|| isNaN(numB)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const dividir= numA / numB

    res.json({ dividir})
})

// Uma rota pra calcular o numero ao Quadrado
router.get("/calculadora/aoQuadrado", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
   
    // valida de ele mandou os paramentros e se estão dentro do intervalo
    if(isNaN(numA)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const aoQuadrado= numA * numA

    res.json({ aoQuadrado})
})
// Uma rota pra calcular a raiz quadrada
router.get("/calculadora/raizQuadrada", (req, res, next) => {
    const numA = parseFloat(req.query.numA)
    

    // valida de ele mandou os paramentros e se estão dentro do intervalo
    if(isNaN(numA)) {
        return res.status(400).json({erro: "números invalidos!!!" })
}    

const raizQuadrada= Math.sqrt(numA)

    res.json({ raizQuadrada})
})



// exporta o roteador
module.exports = router
