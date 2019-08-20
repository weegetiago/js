//usando a notação lioteral
const obj1 = {}
console.log(obj1)

//Objeto em JS 
const obj2 = new Object
console.log(obj2)

//função construtora 
function Porduto(nome, preco, desc) {
    this.nome = nome //torna o nome publico 
    this.gePrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const sku1 = new Porduto('Caneta', 5.23, 0.40)
const sku2 = new Porduto('A2 LTE', 953, 0.10)
console.log(sku1.gePrecoComDesconto())
console.log(sku2.gePrecoComDesconto())

//funçao factory 
function CriaFuncionarios(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario / 30) * (30 - faltas)
        }
    }
}
const funcionario1 = CriaFuncionarios('Weege', 7550, 1)
const funcionario2 = CriaFuncionarios('Ferdinando', 11530, 3)
console.log(funcionario1.getSalario())
console.log(funcionario2.getSalario())

//funcao que retora objeto, JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)