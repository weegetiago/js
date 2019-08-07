//for in 
const notas = [6.4, 8.9, 7.2, 3.2, 4.9, 9.9]
for (let i in notas){
    console.log(notas[i])
}

const pessoa = {
    nome: 'Weege',
    peso: 80,
    nascimento: 1986,
    uf: 'SC' 
}
for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}