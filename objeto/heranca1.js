const ferrari = {
    modelo: 'F40',
    veloMax: 323
}

const volvo = {
    modelo: 'V40',
    veloMax: 143
}

console.log(ferrari.__proto__)
console.log(volvo.__proto__)
console.log(ferrari.__proto__ === Object.prototype)
