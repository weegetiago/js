//MAP pode ser usado para realizar uma tranformação de array. Recebe um array, processa e devolve outro array.
const numero = [1, 2, 3, 4, 5, 6, 7]
let resultado = numero.map(function (elemento) {
    return elemento * 10
})
console.log('Resultado 1:',resultado)

const soma10 = elemento => elemento + 10
const vezes3 = elemento => elemento * 3
const mudaParadinheiro = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.',',')}`

resultado = numero.map(soma10).map(vezes3).map(mudaParadinheiro)
console.log('Resultado 2:',resultado)