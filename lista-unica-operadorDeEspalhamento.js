const clientes = [
    {
        nome: 'André',
        idade: 36,
        cpf: '123456789101',
        email: 'andre@email.com',
        fones: ['5591235498', '5521988743124'],
        dependentes: [
            {
                nome: 'Sara Silva',
                parentesco: 'filha',
                dataNasc: '20/03/2011'
            },
            {
                nome: 'Samia Maria',
                parentesco: 'Filha',
                dataNasc: '04/01/2014'
            }],
    }, 
    {
        nome: 'Juliana',
        idade: 25,
        cpf: '56767867867',
        dependentes:[{
            nome: 'Sofia',
            parentesco: 'filha',
            dataNasc: '30/08/2020'
        }],
    }
]

const listaDeDependentes = {...clientes[0].dependentes, ...clientes[1].dependentes}
console.log(listaDeDependentes)
console.table(listaDeDependentes)