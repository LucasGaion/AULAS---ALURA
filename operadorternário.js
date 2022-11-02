const idadeMinima = 18; //IDADE MINIMA PARA BEBER BEBIDA ALCOLICA
const idadeCliente = 15; //IDADE DO CLIENTE PARA DECISÃO SE É BEBIDA ALCOLICA OU SUCO



//comparação normal com if quando for bastante condições

//if (idadeCliente >= idadeMinima ) {
 // console.log("cerveja")
//} else{
 //console.log("suco")
 //console.log("refrigerante")
//}




// comparação por ternário com uma linha de codigo
//quando o codigo tiver pouca funções da para usar o ternário, mais se tiver muitas funções recomendado usar if

             //condicao                    //true    //false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")