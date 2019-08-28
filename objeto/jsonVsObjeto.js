const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
console.log(JSON.stringify(obj)) //JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c":3}')) //objeto