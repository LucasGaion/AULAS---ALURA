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



    function oferecerSeguro(obj){
      const propsClientes = Object.keys(obj);
      if(propsClientes.includes("dependentes")) //verificação pra ver se da para incluir na chave
  {
  console.log(`Ofert de seguro de vida para ${obj.nome} 
  `);//mensagem direcionada a Lucas
  }      
}

console.log(Object.entries(cliente)) // o valores de cada array -> values  -> entries valores dentro de cada array com dados
oferecerSeguro(cliente)