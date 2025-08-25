console.log("####03 Exercício calculadora node#####")

let prompt = require('prompt-sync')();

let {somar, subtrair, multiplicar, dividir, aoQuadrado, raizQuadrada} = require('./CalculadoraNode')

let numA = parseFloat(prompt("Digite o primeiro número: "));
let numB = parseFloat(prompt("Digite outro número: "));


console.log('A soma dos numeros é : ', somar(numA, numB));
console.log('A subtração dos numeros é : ', subtrair(numA, numB));
console.log('A multplicação dos números é: ', multiplicar(numA, numB));
console.log('A divisão dos números é : ', dividir(numA, numB));
console.log('O número elevado ao quadrado é :', aoQuadrado(numA));
console.log('A raiz quadrada desse número é :', raizQuadrada(numB));