const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

Object.freeze(pessoa) //Este congela o objeto, nao permite CRUD nele.
pessoa.nome = 'Mario'
console.log(pessoa)