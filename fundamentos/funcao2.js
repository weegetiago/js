//Armazenando uma funcao em uma variavel
const imprimirSoma = function (parametroA, parametroB){
    console.log(parametroA + parametroB)
}
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variavel
const soma = (parametroA, parametroB) => {
    return parametroA + parametroB
}
console.log(soma(2,3))

//Retorno implicito 
const somaDois = (parametroA, parametroB) => parametroA + parametroB
console.log(somaDois(3 ,2))