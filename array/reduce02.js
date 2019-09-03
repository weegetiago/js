const alunos = [
    {nome: 'Weege', nota: 8.2, bolsista: true},
    {nome: 'Clemente', nota: 7.2, bolsista: true},
    {nome: 'Ana', nota: 9.2, bolsista: false},
    {nome: 'Amanda', nota: 6.2, bolsista: true},
]

//Todos os alunos são bolsistas? 
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log('Todos aluno são bolsistas?:',alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Tem algum bolsista? 
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log('Tem algum bolsista?:',alunos.map(a => a.bolsista).reduce(algumBolsista))