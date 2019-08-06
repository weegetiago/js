Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim 
}
function imprimirResultado(nota) {
    if(nota.entre(9, 10)){
        console.log('Quadro de honra')
    } else if(nota.entre(7, 8)){
        console.log('Aprovado')
    }else if(nota.entre(0, 6)){
        console.log('REPROVADO')
    } else {
        console.log('Valor inválido')
    }
}
imprimirResultado(10)