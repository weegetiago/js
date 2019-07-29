//Quse tudo é funcao
console.log(typeof Object) //funcao

console.log(typeof new Object) //objeto "new"

class Sku {}
console.log(typeof Sku)
console.log(typeof new Sku())

//Funcao sem retorno
function imprimiSoma(a, b){
    console.log( a + b)
}
imprimiSoma(2 ,3)
imprimiSoma(0, 0)

//Funcao com retorno
function soma(a, b = 1 ){
    return a + b 
}
console.log(soma(7, 3))
