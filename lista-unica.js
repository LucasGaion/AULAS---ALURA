//modo espelhamento

const clientes = [  //clientes e depedentes
{
nome: 'Lucas',
idade: 22,
cpf: '123456789',
email: 'lucas@email.com',
conta: '5555555878',
fones: [ '5598877766', '559998899898' ],
dependentes: [{
    nome: 'Julia',
    parantesco: 'namorada',
    cidadeNasc: '80km',
    dataNasc: '15/03/2003' 
 },
  {
    nome: 'Bella',
    parantesco: 'cachoora',
    cidadeNasc: '90km',
    dataNasc: '21/07/2018'
  }],
}
]
    
const listaDependentes = [...clientes[0].dependentes,...clientes
[1].dependentes] //espalahamento dentro da array original

console.table(listaDependentes)//formato de tabela para mostrar os arrays