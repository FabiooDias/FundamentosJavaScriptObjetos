//Utilizando a Ferramenta do JavaScript Operador de espalhamento
//Com ela é possivel juntar o conjunto de chaves e valores de um dicionario()

const fichaGuerreiro = {
    nome: 'Aragorn',
    classe: 'guerreiro'
}

const equipoGuerreiro = {
    espada: 'Andúril',
    capa: 'capa Élfica +2'
}

const personagens = {...fichaGuerreiro, ...equipoGuerreiro}

console.log(personagens)

