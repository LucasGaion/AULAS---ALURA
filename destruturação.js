const numerosPares = [2,4,6] //pares
const numerosImpares = [1,3,5] //impares

//puxando resultado de numeros Pares e Impares
const numeros = [...numerosPares, ...numerosImpares]
// .... junta tudo array em um só vetor

//resultado 
//console.log(numeros) //arrary de array

/*-----------------------------------------
EXEMPLO => 2 */


const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

//const [nome = 'Lucas' ] = [] //trabalhar com vlor padrão
//console.log(nome)
//console.log(num1, num2, outrosNumeros) //outros numeros 1,2 [3,4,5]

const pessoas = {
    nome: 'lucas',
    idade: 22
}
const pessoasComTelefone = { //adicionando um telefone fora do vetor
    ...pessoas, telefone: 123456987
}

console.log(pessoas, pessoasComTelefone)