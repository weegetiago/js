const sku = [
    {nome: 'Note Dell', preco: 2580, fragil: true},
    {nome: 'Cuia Uruguaya', preco: 45, fragil: false},
    {nome: 'Faca', preco: 350, fragil: false},
    {nome: 'Caneco Oktoberfest', preco: 150, fragil: true},
]

console.log(sku.filter(function(sku) {
    return sku.preco > 50
}))

const skuCaro = sku => sku.preco >= 200
const fragil = sku => sku.fragil 

console.log(sku.filter(skuCaro).filter(fragil))