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

//construtor
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup)// dados da poupança do clientes
{
    cliente.call(this, nome, cpf, email, saldo) //construtor cliente esta chamando dentro do cliente
    this.saldoPoup = saldoPoup
}
                                                                        //saldo  Poupanca
const lucas = new ClientePoupanca("Lucas", "123456789", "lucas@email.com", 100,  200)
//_________________________________________________________________________________________________________

console.log(lucas)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}


lucas.depositarPoup(50)


console.log(` O valor total com deposito é \n ${lucas.saldoPoup}`)



