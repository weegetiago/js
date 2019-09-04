const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Weege',
        nota: 8.1
    },{
        nome: 'Clemente',
        nota: 9.3
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Ane',
        nota: 8.9
    },{
        nome: 'Roberta',
        nota: 7.
    }]
}]
const getNotaDoAluno = aluno => aluno.nota
const getNotaDaturma = turma => turma.alunos.map(getNotaDoAluno)
const notas01 = escola.map(getNotaDaturma)
console.log(notas01)

//Usando o FlatMap
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas02 = escola.flatMap(getNotaDaturma)
console.log(notas02)