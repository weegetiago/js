//Quse tudo é funcao
console.log(typeof Object)

class Sku {}
console.log(typeof Sku)

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
