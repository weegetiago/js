const filterByID = [];
const listCidade = [
    { id: 'SC', cidade: 'Timbó', bairro: "1 Timbó", rua: "5" },
    { id: 'SC', cidade: 'Timbó', bairro: "1 Timbó", rua: "18" },
    { id: 'SC', cidade: 'Timbó', bairro: "2 Timbó", rua: "29" },
    { id: 'SC', cidade: 'Timbó', bairro: "3 Timbó", rua: "33" },
    { id: 'SC', cidade: 'Blumenau', bairro: "1 Blumenau", rua: "" },
    { id: 'SP', cidade: 'São Paulo', bairro: "1 São Paulo", rua: "" },
    { id: 'SP', cidade: 'São Paulo', bairro: "2 São Paulo", rua: "" },
    { id: 'SP', cidade: 'Barretos', bairro: "1 Barretos", rua: "" },
    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "1 Caxia Do Sul", rua: "55" },
    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "1 Caxia Do Sul", rua: "" },
    { id: 'RS', cidade: 'Caxia Do Sul', bairro: "2 Caxia Do Sul", rua: "" },
    { id: 'RS', cidade: 'Santana do Livrametno', bairro: "SDL", rua: "" },
    { id: 'MG', cidade: 'Belo Horizonte', bairro: "BH", rua: "" },
];
listCidade.forEach(pId => {
    if (!filterByID.find(porID => porID.id === pId.id && porID.cidade === pId.cidade)) {
        const { id, cidade } = pId;
        let maisInfo = listCidade
            .filter(pegaMaisInfo => pegaMaisInfo.cidade === cidade)
        filterByID.push({id, cidade, 
            rua: maisInfo.map(res => res.rua),
            bairro: maisInfo.map(res => res.bairro)
        });
    }
});
console.log('Cidades agrupadas por ID', filterByID);