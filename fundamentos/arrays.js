const valores = [7.7, 8.9, 6.3, 9.2, 10]
console.log(valores[0], valores[3])
console.log(valores[5])
console.log(valores.length) // mostra a qtde do array

valores.push({id:3}, false, null, 'teste') //adiciona novas informações no array
console.log(valores)