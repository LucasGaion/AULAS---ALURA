const notas = [10,6,8] // -> notas do aluno que ele tirou
notas.push(7) // está inserindo no utltimo elemento [3]-> push seria adicionar detro do vetor o numero 7
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length
console.log(`A média é ${media}`)