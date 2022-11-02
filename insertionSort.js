const livros = require('./listrasLivros'); //acessar outro arquivo js.. -> puxando informacoes dele


function insertSort(lista){ //puxando aqui lista (listalivros)

    for(let atual = 0; atual < lista.lenght; atual++){ //comparando lista atual dividiando ela no meio leght
        let analise = atual;
        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco){ //condicao -> analise comeca com 0 e depois 1
      let intemAnalise = lista[analise];
      let intemAnterior = lista[analise -1];

      lista[analise] = intemAnterior
      lista[analise - 1] = intemAnalise

            analise --
        }
    }

    console.log(lista);
}

insertSort(livros);