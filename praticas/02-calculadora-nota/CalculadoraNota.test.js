// importar o codifo que vai ser testado

let { calcularNotaA1 } = require("./CalculadoraNota")

//  importar funcionalidade do JEST
let {describe, expect, test} = require('@jest/globals')

// describe para fazer o agrupamento dos testes
describe('Testando modulo CalculadoraNota', () => {
// consultar os testes unitarios
test('calculadoraNota1 -> ex 1 ,trb 3, prov é = 10', () => {
    expect(calcularNotaA1(1, 3, 6)).toBe(10)
})

test('calculadoraNota1 -> ex 0 ,trb 0, prov é = 0', () => {
    expect(calcularNotaA1(0, 0, 0)).toBe(0)
})

//tentaria testar todas as possibilidades possiveis no limites

})

