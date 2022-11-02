const { arch } = require('os');
const livros = require('./listrasLivros');
//puxando do arquivo lista livro array


function menorValor(arrProdutos, posicaoInicial){ //posicao inical arr produto
    let maisBarato = 0; //comeca do indice 0 inicial

    //for dividindo a lista nos mais baratos livros
    for(let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisbarato = atual
        }
    }
    return maisBarato;
}


module.exports = menorValor;