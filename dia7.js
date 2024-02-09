let read = require("readline-sync")

let adic = (n1, n2) => n1 + n2;
let mult = (n1, n2) => n1 * n2;
let subt = (n1, n2) => n1 - n2;
let div =  (n1, n2) => n1 / n2;
let opcao = "soma"

console.log("=======================")
console.log("Bem vindo a calculadora")
console.log("=======================")

while (opcao == "soma" || opcao == "sub" || opcao == "mult" || opcao == "div"){
    opcao = read.question("Você deseja somar [soma], subtrair [sub], multiplicar [mult], dividir [div] ou sair [sair]: ")
    
    if (opcao == "soma" || opcao == "sub" || opcao == "mult" || opcao == "div"){
        let n1 = Number(read.question("Digite o primeiro número: "))
        let n2 = Number(read.question("Digite o segundo número: "))
        
        if (opcao == "soma"){
            console.log(`O resultado da soma é: ${adic(n1, n2)}.`)
            } else if (opcao == "sub"){
                console.log(`O resultado da subtração é: ${subt(n1, n2)}.`)
                } else if (opcao == "mult"){
                    console.log(`O resultado da multiplicação é: ${mult(n1, n2)}.`)
                } else if (opcao == "div"){
                    console.log(`O resultado da divisão é: ${div(n1, n2)}.`) 
                } 
        
    } else if (opcao == "sair") {
        console.log("======================================")
        console.log("Calculadora finalizada, até a próxima!")
        console.log("======================================")         
                }
            }