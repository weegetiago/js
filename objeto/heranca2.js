//cadeia de prototipos (prototype chain)
const avo = {nome: 'Amilton - Avo'}
const pai = {__proto__: avo, nomePai: 'Amilton II - Pai'}
const filho = {__proto__: pai, nomeFilho: 'Amilton III - Filho'}
console.log(filho.nome)

console.log('*************************************************************************************')

const velocidadeCarro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual += this.velMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324, //shadowing
}

const volvo = {
    modelo: 'V10',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, velocidadeCarro)
Object.setPrototypeOf(volvo, velocidadeCarro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())

