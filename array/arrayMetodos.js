const piloto = ['Vettel', 'Massa', 'Raikkonen', 'Alonso']
piloto.pop() //remove o ultimo item do array
console.log(piloto)

piloto.push('Senna')
console.log(piloto)

piloto.shift() //remove o primeiro item do array, unshift add no inicio do array
console.log(piloto)

//splice emove e add elementos ao array

//add
piloto.splice(2, 0,'Bottas') //2=indice do array, 0 = nao removeu ngm
console.log(piloto)

//remover
piloto.splice(0, 1,'Weege') //0=indice do array, 1 = removeu 1
console.log(piloto)

