const cliente = {
    nome: 'Lucas',
    idade: 22,
    cpf: '123456789',
    email: 'lucas@email.com',
    conta: '5555555878',
    fones: [ '5598877766', '559998899898' ],
    dependentes: [
      {
        nome: 'Julia',
        parantesco: 'namorada',
        cidadeNasc: '80km',
        dataNasc: '15/03/2003' },
      {
        nome: 'Bella',
        parantesco: 'cachoora',
        cidadeNasc: '90km',
        dataNasc: '21/07/2018'
      }
    ],
    
    saldo: 100, // valor inicial da conta

    depositar: function(valor) // função para add um valor no obejto -> cliente
    
  {
    this.saldo += valor1 //essa estancia de obejeto (this)
    //this.saldo -= valor2 // como fazer conta de menos -=
  }
  }


  let relatorio ="";
  
  for( let info in cliente){
    if(typeof cliente [info] === "object" || typeof cliente [info] ===  "function") // se for objeto ou função || é do js aparecer object ou function
 {
  continue
 }else{
    relatorio += `
    ${info} => ${cliente[info]}
    `
 }

  }

console.log(relatorio)