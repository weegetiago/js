function area(largura, altura){
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do perimetro: ${area}m2.`)
    } else {
        return area
    }
}
area(10, 50)