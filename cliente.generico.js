//novo objeto cliente
function cliente(nome,cpf,email,saldo)
{
    this.nome      = nome
    this.cpf       = cpf
    this.email     = email
    this.saldo     = saldo
    this.depositar = function(valor){ //função construtora
        this.saldo += valor
    }
}

//new -> é uma palavra reservda no JS para dizer que estamos usando a função cliente e abrindo estançia de uma cliente nova
const lucas = new cliente("Lucas", "123456789", "luca s@email.com",100) //saldo defenido em 100

console.log(lucas)