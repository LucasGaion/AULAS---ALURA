               //0       1
const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Lucas', 'Guilherme', 'Aline', 'Fabiana', 'Andre',
 'Carlos', 'Paulo','Bia', 'Vivian', 'Isabela', 'Vinicus', 'Renan', 'Renata', 'Daisy', 'Camilo']
//nomes 'adiconar' dentro disso

console.log("tamanho da array:", nomes.length )
                          //0 //10
const sala1 = nomes.slice(0, nomes.length/2) //começa do elemento [0], slice divide no meio a lista, leght por 2 o total de nomes 
                          //10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}\n`)
console.log(`Alunos da sala 2: ${sala2})`)