class Cliente { //sempre um nome de uma classe com letra maiscula é padrao do js
    constructor (nome, email, cpf, saldo){ //defenindo atributos -> CONSTRUINDO UM CLIENTE
        this.nome      = nome
        this.cpf       = cpf
        this.email     = email
        this.saldo     = saldo
    }
    
    
    depositarContaCorrente(valor){ //FUNÇÃO MÉTODO
        this.saldo += valor //defenindo valor com saldo
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

//usar herança
class ClientePoupanca extends Cliente { //erdou do clientes os dados 
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo) //super traz tudo da infrmação class cliente
            this.saldoPoupanca  = saldoPoupanca

    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
} 
                                                                            // S     P   Saldo - Poupanca
const lucas = new ClientePoupanca("Lucas", "lucas@email.com.br", "123456789", 100,  200)

console.log(lucas)


/* valor inicial 
        CONTA CORRENTE => 100 REIAS
        CONTA POUPANÇA => 200 REAIS   
        */

lucas.depositarContaCorrente(3300) //depositando conta corrente= 100 reais
lucas.depositarPoupanca(130)  // depositando conta poupança = 100 reais

console.log(lucas)