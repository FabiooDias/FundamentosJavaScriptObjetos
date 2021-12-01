const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '123456789101',
    email: 'andre@email.com',
    fones: [ '5591235498', '5521988743124' ],
    dependentes: [
      { nome: 'Sara Silva', 
      parentesco: 'filha', 
      dataNasc: '20/03/2011' 
      },
      {
        nome: 'Samia Maria',
        parentesco: 'Filha',
        dataNasc: '04/01/2014'
      }
    ],
    saldo: 100,
    depositar: function(valor)
    {
        this.saldo += valor
    }
  }

  let relatorio = ""

  for(let info in cliente){
      if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
          continue
      } else {
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
      }
  }
  console.log(relatorio)