const nota = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callBack 
let notaBaixa = []
for (let i in nota) {
    if (nota[i] < 7) {
        notaBaixa.push(nota[i])
    }
}
console.log('notaBaixa',notaBaixa)

//Com callBack 
const notaBaixa2 = nota.filter(function(notas){
    return notas < 7
})
console.log('notaBaixa2',notaBaixa2)

//Com callBack + arrow
const notasMenorQue7 = notas => notas < 7
const notaBaixa3 = nota.filter(notasMenorQue7)
console.log('notaBaixa3', notaBaixa3)