function trataErro(erro) {
    throw  new Error('666 ')
}

function imprimiNome(obj) {
    try{
        console.log(obj.name.toUpperCase() +  '!!')
    } catch (e) {
        trataErro(e)
    }
}

const obj = {nAme: 'Weege'}
imprimiNome(obj)