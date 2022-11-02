const cliente = { // dados cliente
    nome:"Lucas",
    idade:22,
    cpf:"123456789",
    email:"lucas@email.com",
    conta:"5555555878",
    fones: ["5598877766", "559998899898"] /*cai bem a lista de telefones de cada cliente seja em um tipo de dados (fones)*/ 

} 

//conferir os telefones que estão dentro do vetor de dados
cliente.fones.forEach(fone => console.log(fone))  