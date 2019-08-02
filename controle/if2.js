function pontoVirgula(num) {
    if (num > 7); //Não usar ';' nas estruturas de controle.
    console.log(num)
}
pontoVirgula(6)
pontoVirgula(8)

function testeIfSemBloco(num) {
    if(num > 7)
        console.log(num)
        console.log('Usando {estrutura} no bloco if, esta linha não ia se repetir.')
}

testeIfSemBloco(6)
testeIfSemBloco(9)