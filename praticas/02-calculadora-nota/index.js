console.log("######## Projeto 02 - Calculadora de nota #########")

// importo e executo o prompt-sync
let prompt = require('prompt-sync')();

let nome = prompt("Qual é o seu nome?")
console.log("Olá " + nome)

let {calcularNotaA1, calcularNotaA2, calcularNotaFinal} = require('./CalculadoraNota')

console.log("###Calculando nota A1###")
let exerciciosA1 = parseFloat(prompt("Qual a sua nota de exercicio?"))
let trabalhoA1 = parseFloat(prompt("Qual a sua nota de trabalho?"))
let provaA1 =parseFloat(prompt("Qual a sua nota da prova?"))
let notaA1 = calcularNotaA1(exerciciosA1, trabalhoA1, provaA1)

console.log("Nota A1 calculada: " + notaA1)
console.log("### Finalizado calculo Nota A1###")


console.log("###Calculando nota A2###")
let exerciciosA2 = parseFloat(prompt("Qual a sua nota de exercicio?"))
let trabalhoA2 = parseFloat(prompt("Qual a sua nota de trabalho?"))
let provaA2 =parseFloat(prompt("Qual a sua nota da prova?"))
let notaA2 = calcularNotaA2(exerciciosA2, trabalhoA2, provaA2)

console.log("Nota A2 calculada: " + notaA2)
console.log("### Finalizado calculo Nota A2###")

console.log("###Calculando nota FINAl###")
let media  = calcularNotaFinal(notaA1, notaA2)

console.log("Média final: "+ media)

if (media >= 5){
    console.log("Parabéns " + nome + ", Você foi aprovado!!!!")
} else {
    console.log(nome + " Voce foi reprovado, burro!!!!")
}