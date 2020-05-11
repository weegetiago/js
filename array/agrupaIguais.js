//Agrupa por registros iguais.

const filterByID = [];
const cidade = [
    { id: 'SC', cidade: 'Timbó' },
    { id: 'SC', cidade: 'Timbó' },
    { id: 'SC', cidade: 'Timbó' },
    { id: 'SC', cidade: 'Blumenau' },

    { id: 'SP', cidade: 'São Paulo' },
    { id: 'SP', cidade: 'São Paulo' },
    { id: 'SP', cidade: 'Barretos' },

    { id: 'RS', cidade: 'Caxia Do Sul' },

    { id: 'MG', cidade: 'Belo Horizonte' },
];

cidade.forEach(pId => {
    if (!filterByID.find(porID => porID.id == pId.id && porID.cidade == pId.cidade)) {
        const { id, cidade } = pId;
        filterByID.push({ id, cidade,});
    }
});

console.log('Cidades agrupadas por ID',filterByID);
console.log('Cidades', cidade);