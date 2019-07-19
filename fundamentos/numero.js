const peso1 = 1.0
const peso2 = Number('2.1')

console.log(peso1)
console.log(Number.isInteger(peso1))
console.log(peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.530
const avaliacao2 = 798.33 
const total = avaliacao1 * peso1 + avaliacao2 * peso2 
const media = total / (peso1 + peso2) 

console.log(media.toString(2)) //decimais
console.log(media.toFixed(2)) //decimais
console.log(typeof media) //mosta o tipo 
console.log(media)

