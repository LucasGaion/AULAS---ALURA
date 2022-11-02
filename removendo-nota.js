const notas = [10,7,8,5,10] // -> notas do aluno que ele tirou
notas.pop()//pop ele tirar o ultimo elemento [4] -> 10
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length //leght tamanho
console.log( `A média é ${media}`) //sring inserindo o resultado da media ` A média é ${media}`