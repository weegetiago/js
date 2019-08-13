const montadora = ["VW", "GM", "BMW","Yamaha", "Audi"]

function imprimir(nome, indice) {
console.log(`${indice + 1}-${nome}`)
}
montadora.forEach(imprimir)