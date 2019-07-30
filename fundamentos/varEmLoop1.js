// for (var i =0; i < 11; i++){
//     console.log(i)
// }
// console.log('i =', i, ':)') 

const valor = []
for (var a = 0; a < 10; a++) {
    valor.push(function() {
        console.log(a)
    })
}
valor[2]()
valor[2]()
valor[2]()
valor[5]()
valor[9]()