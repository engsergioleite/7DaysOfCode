const colors = require('color') // chamando a lib
const read = require('readline-sync') // chamando a lib que vai ler o valor digitado no teclado
const arrayTecnologias = []
let opcao = 0
let opcaoEspecialidade = 0


while(opcao != 1 && opcao != 2){
console.clear()
console.log(`=== Bem vindo ao Jogo ===`)
console.log(`-------------------------`)
console.log(`digite 1 para Front-end`)
console.log(`digite 2 para Back-end`)
opcao = read.question('Digite a opção');
}

if (opcao == 1){
    console.log('Você escolheu Front-end')
        opcaoEspecialidade = read.question('Agora, digite 1 para React ou 2 para Vue');
} else if(opcao == 2){
    console.log('Você escolheu Back-end')
        opcaoEspecialidade = read.question('Agora, digite 1 para C# ou 2 para Java');
} 

console.log('Você pode seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack.')

let tecnologias = "ok"
let qualTecnologia = 0

while (tecnologias == "ok"){
    tecnologias = read.question('Tem mais alguma tecnologia que gostaria de aprender? Ok para sim: ')
    if(tecnologias == "ok"){
        qualTecnologia = read.question('Qual tecnologia? ')
        arrayTecnologias.push(qualTecnologia)
    } else {
        console.log(`As tecnologias que você gostaria de aprender são: ${arrayTecnologias}`)
    }
}