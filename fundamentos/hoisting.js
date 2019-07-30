console.log('a', a)
var a = 2
console.log('a', a)


function hoisting() {
    console.log('Funcao', a)
var a = 2
console.log('Funcao', a)
}
hoisting()

//O hoisting automaticamente inicia a variavel, antes das demais linhas de código. 
//O mesmo não ocorre usando LET, somente com VAR.
