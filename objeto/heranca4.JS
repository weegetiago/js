function MeuObj() { }
console.log(MeuObj.prototype)

const obj1 = new MeuObj
const obj2 = new MeuObj
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj2.__proto__)

MeuObj.prototype.nome = 'Jairo'
MeuObj.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}
obj1.falar()

obj2.nome = 'Adamastor'
obj2.falar()
