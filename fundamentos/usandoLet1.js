//var numero = 'oi'
// let numero = 1
// {
//     let numero = 2
//     console.log('dentro=', numero)
// }
// console.log('fora',  numero)

//let tem escopo de bloco, var não.

const valor = []
for (let a = 0; a < 10; a++) {
    valor.push(function() {
        console.log(a)
    })
}
valor[2]()
valor[2]()
valor[3]()
valor[4]()
valor[5]()