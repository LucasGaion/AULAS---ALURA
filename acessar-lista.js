const cliente = { // dados cliente
    nome:"Lucas",
    idade:22,
    cpf:"123456789",
    email:"lucas@email.com",
    conta:"5555555878"

} 
/*                     0       1        2      3                                                   */
const dadosCliente = ["nome", "idade", "cpf", "email", "conta"] //acessar chaves -> com o dados

dadosCliente.forEach(dados => console.log(cliente[dados]))

console.log(cliente["conta"])// acessando informações de cada dados exemplo acessando só conta

//console.log(cliente[chaves[3]])// acessando o intem do vetor dadosCliente

