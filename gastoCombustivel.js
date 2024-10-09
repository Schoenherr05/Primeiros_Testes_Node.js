function calculoGasto(distancia, combustivel) {
   let total
   let litroGasolina = 16
   let litroEtanol = 11

   if (distancia < 0 || !Number.isInteger(distancia)) {
      console.log("Inválido!")
      return -1
   } 
   
   if (typeof combustivel !== "string") {
      console.log("Inválido!")
      return -2
   } 
   
   if (combustivel == "gasolina") {
      total = (distancia / 1000) / litroGasolina

      return total
   } 
   
   if (combustivel == "etanol") {
      total = (distancia / 1000) / litroEtanol

      return total
   }
   
   if (combustivel !== "gasolina" || combustivel !== "etanol") {
      console.log("Inválido!")
      return -3
   }
}

function arrendondarNumero(distancia) {
   if (typeof distancia !== "number") {
      return "Inválido"

   } else {
      return Math.round(distancia)
   }
  
}

module.exports = {calculoGasto, arrendondarNumero}