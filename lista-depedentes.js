const cliente = { // dados cliente
    nome:"Lucas",
    idade:22,
    cpf:"123456789",
    email:"lucas@email.com",
    conta:"5555555878",
    fones: ["5598877766", "559998899898"], /*cai bem a lista de telefones de cada cliente seja em um tipo de dados (fones)*/ 
    dependentes:  [{ // adicioando pessoas junto com os dados do cliente
        nome:"Julia",
        parantesco:"namorada",
        cidadeNasc:"80km",
        dataNasc: "15/03/2003"
    }]
} 


cliente.dependentes.push({ //adionar mais depedentes dentro depedentes
    nome:"Bella",
    parantesco:"cachoora",
    cidadeNasc:"90km",
    dataNasc: "21/07/2018"
})

console.log(cliente)


//comparar quem é mais nova
const filhaMaisNova = cliente.dependentes.filter
(dependente => dependente.dataNasc==="21/07/2018")

console.log(filhaMaisNova)
console.log(filhaMaisNova[0].nome)


