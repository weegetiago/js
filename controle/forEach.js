numeros = [0, 1, 2, 3, 4, 5]
total = 0

function somar(item) {
    total += item
}
numeros.forEach(somar)

console.log('TOTAL',total)