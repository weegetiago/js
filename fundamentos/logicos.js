function compra(job1, job2){
    const compraSorvete = job1 || job2
    const compraTv50 = job1 && job2
    const compraTv32 = job1 != job2 //Mesmo que "^" que é um "OU" exclusivo.
    const manterSaudavel = !compraSorvete

    return{ compraSorvete, compraTv32, compraTv50, manterSaudavel }
}

console.log(compra(true, true))
console.log(compra(true, false))
console.log(compra(false, true))
console.log(compra(false, false))