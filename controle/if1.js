function soBoaBotnicia(nota) {
    if(nota >= 7){
        console.log('Aprovado com' + nota)
    }
}
soBoaBotnicia(8.1)  

function seValorVerdade(valor) {
    if(valor){
        console.log('Valor ok, ' + valor + ' não é NaN ou undefined, etc..')
    }
}
seValorVerdade()
seValorVerdade(null)
seValorVerdade('')
seValorVerdade(NaN)
seValorVerdade('Weege')
seValorVerdade(' ')
seValorVerdade(1)
seValorVerdade([]) //array vazio
seValorVerdade([1,2,3]) 
seValorVerdade({}) //obj vazio