const a = 1
const b = 2
const c = 3
const obj1 = {a, b, c}
console.log(obj1)

const notaNome = 'Nota S.O'
const valorNota = 7.05
const obj2 = {}
obj2[notaNome] = valorNota
console.log(obj2)

const obj3 = {[notaNome]: valorNota}
console.log(obj3)