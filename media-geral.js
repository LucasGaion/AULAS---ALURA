const salaA = [7, 6, 5, 4, 7.5, 10]   //=> A
const salaB = [8, 9, 10, 6, 5, 4]   //=> B
const salaC = [10, 5, 6, 7, 8, 4]  //=> C


function mediaSala(notasDaSala){
    const somaDasNotas =  notasDaSala.reduce((acum,
    atual) => atual + acum, 0)
    return somaDasNotas / notasDaSala.lenght
}

console.log(`Média da sala de A ${mediaSala(salaA)}`)
console.log(`Média da sala de B ${mediaSala(salaB)}`)
console.log(`Média da sala de C ${mediaSala(salaC)}`)