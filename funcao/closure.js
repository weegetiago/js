//Closure é o escopo criado quando uma funcao e declarada.
//Esse escopo permite a funcao acessar e manipular variaveis externas a funcao.

//Contexto lexico em ação:
const x = 'G'

function fora() {
    const x = 'L'
    function dentro() {
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())