const livros = require('./listrasLivros');//puxando array listalivros
const menorValor = require('./menorValor');//puxando array menorLivro

               //1
for (let atual = 0; atual < livros.length - 1 ; atual++){
    let menor = menorValor(livros, atual)


    let livroAtual = livros[atual];
    console.log(`posicao do livro atual`, atual)
    console.log(`Livro atual`, livros[atual])
    let livroMenorPreco = livros[atual];
    console.log(`Livro menor preco`, livros[menor])

    livros[atual] = livroMenorPreco
    livros[atual] = livroAtual
    
}

console.log(livros)