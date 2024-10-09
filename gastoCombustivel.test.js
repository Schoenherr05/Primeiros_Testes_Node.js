const gastoCombustivel = require("./gastoCombustivel.js")

test('o valor de distância deve ser inteiro e posivito', () => {
    expect(gastoCombustivel.calculoGasto(6000, "gasolina")).not.toBe(-1)
});

test('o tipo de combustível deve ser uma string', () => {
    expect(gastoCombustivel.calculoGasto(6000, 1234)).toBe(-2)
})

test('o tipo de combustível deve ser somente gasolina ou etanol', () => {
    expect(gastoCombustivel.calculoGasto(6000, "combustivel")).toBe(-3)
})