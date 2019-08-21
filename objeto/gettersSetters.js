const sequencia = {
    _valor: 1, //Definida por convenção como "privada"
    get valor() {return this._valor++ },
    set valor(valor){
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}
console.log(sequencia.valor, sequencia.valor, sequencia.valor)
sequencia.valor = 1033
console.log(sequencia.valor, sequencia.valor, sequencia.valor)