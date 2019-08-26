function Aula(nomeAula, videoId) {
    this.nomeAula = nomeAula
    this.videoId = videoId
}
const aula1 = new Aula('Lógica de programação', 356998)
const aula2 = new Aula('POO', 465881)
console.log(aula1, aula2)

//Simulando o operador new (É isso que o new faz)
function novo(f, ...params) {
    const obj = {}
    obj.__proto__= f.prototype
    f.apply(obj, params)
    return obj
}
const aula3 = novo(Aula,'New X', 32155)
console.log(aula3)