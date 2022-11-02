const cliente = {
    nome:"Lucas",
    idade:22,
    cpf:"37073707801",
    email:"lucascolturato@outlook.com"
} 

console.log(`Meu nome é ${cliente.nome} tenho ${cliente.idade}`)
console.log(cliente.cpf.substring(0,3)) //SUBSTRING -> usa para selecionar até onde vc quer que mostra os dados do CPF mostra os 3 primeiro numeor do cpf
