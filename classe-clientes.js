class Cliente { //sempre um nome de uma classe com letra maiscula é padrao do js
    constructor (nome, email, cpf, saldo){ //defenindo atributos -> CONSTRUINDO UM CLIENTE
        this.nome      = nome
        this.cpf       = cpf
        this.email     = email
        this.saldo     = saldo
    }
    
    depositat(valor){ //FUNÇÃO MÉTODO
        this.saldo += valor //defenindo valor com saldo
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

const lucas = new Cliente("Lucas", "123456789", "lucas@email.com", 100)


lucas.exibirSaldo()
console.log(lucas)
