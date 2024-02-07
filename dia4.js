const read = require('readline-sync')

// let num = Math.floor(Math.random() * 11) // opcional

let num = Math.floor(Math.random() * (10 - 0 + 1) + 0)

let palpite = 0
for (let i = 2 ; i>=0 ; i--){
palpite = read.question('Qual número você quer arriscar? ')
if (palpite == num){
    console.log(`Parabéns!! Você acertou o número aleatório era ${num}.`)
    break
} else if (i > 0){
    console.log(`VocÊ errou, terá mais ${i} tentativas`)
}
if (i == 0){
    console.log(`Você não acertou! O número sorteado era ${num}`)
}
}
