const alunos = [
    { nome: 'Weege', nota: 7.3, bolsista: true },
    { nome: 'Clemente', nota: 9.2, bolsista: true },
    { nome: 'Ana', nota: 9.8, bolsista: false },
    { nome: 'Amanda', nota: 8.7, bolsista: true },
]

//Imperativo 
let total01 = 0
for (let i = 0; i < alunos.length; i++){
    total01 += alunos[i].nota
}
console.log('Imperativo',total01 / alunos.length)

//Declarativo
const getNota = alunos => alunos.nota
const soma = (total, atual) => total + atual
const total02 = alunos.map(getNota).reduce(soma)
console.log('Declarativo', total02 / alunos.length)