const colecionador = {
    nome: "João do Gibi",
    idade: 41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionartipo: function(propriedade, tipo){
        this[propriedade].push(tipo)
    }
}

console.log(colecionador.nome)
console.log(colecionador["nome"])

for(i = 0; i < 4; i++){
    colecionador.adicionartipo("tipocolecao", "HQ" + i)
}
console.log(colecionador)

