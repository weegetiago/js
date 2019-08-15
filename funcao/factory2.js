function cadastroPessoa(nome, altura) {
    return {
        nome,
        altura,
        peso: 80,
    }
}
console.log(cadastroPessoa('Weege', 1.75, 80))
console.log(cadastroPessoa('Edmundo', 1.80, 85))
console.log(cadastroPessoa('Ingo', 1.80, 110))