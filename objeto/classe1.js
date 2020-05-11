class Lancamentos {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}
class Ciclofinancas {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }
    addLancamento(...lancamento) {
        lancamento.forEach(l => this.lancamento.push(l))
    }
    sumario() {
        let valorConsolidado = 0
        this.lancamento.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
const salario = new Lancamentos('Salario', 10000)
const contaLuz = new Lancamentos('Luz', -1000)

const contas = new Ciclofinancas(6, 2019)
contas.addLancamento(salario, contaLuz)
console.log(contas.sumario())