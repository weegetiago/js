const aprovado = ['Weege', 'Clemete', 'Mano Lima', 'Aroldo']

aprovado.forEach(function (nome, indice) {
    console.log(`${indice + 1}- ${nome}`)
})

aprovado.forEach(nome => console.log(nome))

const exibiAprovados = aprovado => console.log(aprovado)
aprovado.forEach(exibiAprovados)


const montadoras = ['VW', 'GM', 'FIAT', 'BMW', 'AUDI']
montadoras.forEach(function(marca, indice) {
    console.log(`Marca: ${marca}`)
})