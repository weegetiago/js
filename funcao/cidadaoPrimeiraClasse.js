//forma literal
function fun1(param) { 'bloco logico da função' }

//Armazenar em uma variavel
const fun2 = function () { }

//Armazenar em uma array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

//Passar funcao como param
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })

//Função pode retornar/conter um função
function soma(a, b) {
    return function somador(c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)