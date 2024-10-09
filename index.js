var gastoCombustivel = require("./gastoCombustivel.js")
const arrendondarNumero = require("./gastoCombustivel.js")
const prompt = require("prompt-sync")({sigint: true})

let distancia = Number(prompt("Qual a distância em metros que o carro vai percorrer?  "))
let combustivel = prompt("Qual o tipo de combustível que será utilziado? (gasolina / etanol): ")

let resultado = gastoCombustivel.calculoGasto(distancia, combustivel)
console.log(arrendondarNumero.arrendondarNumero(resultado))