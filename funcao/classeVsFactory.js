//classe
class ClassePessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar() {
        console.log(`ClassePessoa: O nome é ${this.nome}`)
    }
}
const criarPessoa = new ClassePessoa('Joao')
criarPessoa.falar()

//funcao
function FuncaoPessoa(nome) {
    this.nome = nome

    this.falar = function(){
        console.log(`FuncaoPessoa: O nome é ${this.nome}`)
    }
}
const kriarPessoa = new FuncaoPessoa('Joao')
kriarPessoa.falar()