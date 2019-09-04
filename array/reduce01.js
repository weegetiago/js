//REDUCE: Transforma um array em um único elemento. É um recurso de agregação.
const alunos = [
    { nome: 'Weege', nota: 7.3, bolsista: true },
    { nome: 'Clemente', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 9.8, bolsista: false },
    { nome: 'Amanda', nota: 8.7, bolsista: true },
]

console.log(alunos.map(a => a.nota)) //mostra as otas
const somaNotas = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log('Soma anterior:',acumulador,',', 'Valor que sera somado:',atual) //mostra o valor atual mais o que será somado
    return acumulador + atual
})
console.log('Soma das notas:',somaNotas)