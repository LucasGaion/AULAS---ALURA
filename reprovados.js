const nomes = ['Lucas', 'Julia', 'Alonso', 'Marinete',] //=> sting nomes
const notas = [ 7,       4.5,     8,        7.5] //=> sting notas

const reprovados = nomes.filter( (aluno,indice) => notas
[indice] < 6) //=> filtro para filtrar notas maior que 6 é aprovado ✓
              //=> menor que 6 é reprovado

console.log(`Reprovados: ${reprovados}`)
