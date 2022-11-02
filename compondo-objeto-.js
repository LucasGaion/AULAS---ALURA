const cliente = { // dados cliente
    nome:"Lucas",
    idade:22,
    cpf:"123456789",
    email:"lucas@email.com",
    conta:"5555555878",
    fones: ["5598877766", "559998899898"] /*cai bem a lista de telefones de cada cliente seja em um tipo de dados (fones)*/ 

} 

cliente.depedentes = { // adicioando pessoas junto com os dados do cliente
    nome:"Julia",
    parantesco:"namorada",
    cidadeNasc:"Ibitinga",
    dataNasc: "15/03/2003"
}

console.log(cliente)

//alterando o cliente parantesco
cliente.depedentes.nome = "Julia Roncada"
cliente.depedentes.parantesco = "namorada linda"
cliente.depedentes.cidadeNasc = "Londres"

console.log(cliente)