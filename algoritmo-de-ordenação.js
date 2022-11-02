// COMPLEXIDADE DE ALGORITMO DE ORDENAÇÃO

const livros = require ('./listrasLivros');


let maisBarato = 0; //iniciar em 0  => primeiro indice do array
//for percorrer o valor atual començando em = 0 - que seria 25 e achando o valor menor que 25 em ordem menor para maior
for (let atual = 0; atual < livros.length; atual++){
   if(livros[atual] < livros[maisBarato]){// condição de comparar se o preço do livro atual e o mais barato
        maisBarato = atual
   }
} 


console.log(`O livro mais barato custa ${livros[maisBarato].preco} e o titulo é ${livros[maisBarato].titulo}`)
