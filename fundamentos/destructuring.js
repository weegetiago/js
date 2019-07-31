const dog = {
    nome: 'Laura',
    idade: 6,
    raça: 'Linguiça Fake',
}
const { nome, idade, raça } = dog 
console.log('Nome:',nome,',', 'Idade:', idade,',', 'Raça:', raça)

const [n1, , n3, n4, n5] = [1, 2, 3, 4]
console.log(n1, n3, n4, n5)

function rand([min = 0, max=1000]) {
    if (min > max) [min, max] = [max, min] //verifica e inverte valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand([50, 40]))
console.log(rand([9999]))
