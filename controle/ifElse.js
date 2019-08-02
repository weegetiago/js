function imprimirResultado(nota) {
    if(nota >= 7) {
        console.log('Nota:', nota, 'Aprovado :)')
    } else {  //else;
        console.log('Nota:', nota, 'Reprovado :(')
    }
}
imprimirResultado(5)
imprimirResultado(9)
imprimirResultado(7)