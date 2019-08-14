//EX: Classe carro, metodo acelerar, objeto celta
function Carro(velocidadeMaxima = 300, delta = 10) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo pubico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

//construtora
const celta = new Carro(150, 20)
celta.acelerar()
console.log('Celta:', celta.getVelocidadeAtual())

const bmw = new Carro
bmw.acelerar()
console.log('BMW:', bmw.getVelocidadeAtual())