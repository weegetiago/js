const carrinho = [
    '{"sku": "Borracha", "preco": 3.45}',
    '{"sku": "caderno", "preco": 13.90}',
    '{"sku": "kit lapis", "preco": 43.90}',
    '{"sku": "caneta", "preco": 7.50}'
]

//Retorna um array apenas com o preço.
const paraObjeto = json => JSON.parse(json) //tranforma as strings em objeto
const apenasPreco = produto => produto.preco //pega as informações do array 
const resultado = carrinho.map(paraObjeto).map(apenasPreco) //passa o preco, se "//.map(apenasPreco)" retorna todo o array

console.log(resultado)