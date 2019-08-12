//Ex1
let comparaComThis = function (param) {
    console.log('comparaComThis',this == param)
}
comparaComThis(global) //global? 
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

//Ex2
let comparaComThisArrow = param => console.log('comparaComThisArrow',this == param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)