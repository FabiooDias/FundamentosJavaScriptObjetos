// Define os construtores do Objeto
function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
// Vamos adicionar um Cliente
const andre = new Cliente("André", "12345678910", "andre@email.com", 100)

// Neste momento é criado um novo construtor de Objeto que utiliza Cliente para gerar um  novo tipo de Cliente
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

// Em seguida vamos adicionar um Cliente Poupança
const ju = new ClientePoupanca("Ju", "12312312313", "ju@email.com", 100, 200)

//Vamos através do Prototype adicionar um atributo ao Cliente Poupança que recebe uma Função
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

console.log(andre.hasOwnProperty("saldoPoup"))//Verifica se saldoPoup é uma Propriedade de Andre
console.log(ju.hasOwnProperty("saldoPoup"))//Verifica se saldoPoup é uma Propriedade de Andre
console.log(andre instanceof Cliente)
console.log(typeof andre)
console.log(typeof ju)
console.log(ju instanceof ClientePoupanca)
console.log(Function.prototype.isPrototypeOf(Cliente))
console.log(Cliente.constructor === Function)
