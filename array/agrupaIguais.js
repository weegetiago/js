//Agrupa por registros iguais.
const filterByID = [];
const listCidade = [
    { id: 'SC', cidade: 'Timbó', bairro: "1 Timbó" },
    { id: 'SC', cidade: 'Timbó', bairro: "1 Timbó" },
    { id: 'SC', cidade: 'Timbó', bairro: "2 Timbó" },
    { id: 'SC', cidade: 'Timbó', bairro: "3 Timbó" },
    { id: 'SC', cidade: 'Blumenau', bairro: "1 Blumenau" },

    { id: 'SP', cidade: 'São Paulo', bairro: "1 São Paulo" },
    { id: 'SP', cidade: 'São Paulo', bairro: "2 São Paulo" },
    { id: 'SP', cidade: 'Barretos', bairro: "1 Barretos" },

    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "1 Caxia Do Sul" },
    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "1 Caxia Do Sul" },
    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "2 Caxia Do Sul" },
    { id: 'RS', cidade: 'Santana do Livrametno', bairro: "SDL" },

    { id: 'MG', cidade: 'Belo Horizonte', bairro: "BH" },
];
listCidade.forEach(pId => {
    if (!filterByID.find(porID => porID.id === pId.id && porID.cidade === pId.cidade)) {
        const { id, cidade } = pId;
        filterByID.push({ id, cidade, bairro:listCidade
            .filter(filtra => filtra.cidade === cidade)
            .map(res =>  res.bairro )});
    }
});
console.log('Cidades agrupadas por ID', filterByID);
