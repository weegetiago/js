//Gera bug
function soma1(a,b,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(0,0,0)) //Retorna falço, neste exemplo iria gerar um bug

//forma correta
function soma2(a,b,c){
    a = isNaN(a) ? 1 : a //Se for NaN retorna 1, senão retorna o valor dela
    b = isNaN(b) ? 1 : b //Se for NaN retorna 1, senão retorna o valor dela
    c = isNaN(c) ? 1 : c //Se for NaN retorna 1, senão retorna o valor dela
    return a + b + c
}
console.log(soma2(1,2,3),soma2(0,0,0))

//Forma simplificada "ES2015"
function soma3(a=1, b=1, c=1){
    return a + b + c 
}
console.log(soma3(1,2,3), soma3(0,0,0))