let read = require("readline-sync")

let adic = (n1, n2) => n1 + n2;
let mult = (n1, n2) => n1 * n2;
let subt = (n1, n2) => n1 - n2;
let div =  (n1, n2) => n1 / n2;

console.log("=======================")
console.log("Bem vindo a calculadora")
console.log("=======================")
let opcao = read.question("Você deseja somar [soma], subtrair [sub], multiplicar [mult], dividir [div] ou sair [sair]: ")

while (opcao == "soma" || opcao == "sub" || opcao == "mult" || opcao == "div") {
    
    let n1 = Number(read.question("Digite o primeiro número: "))
    let n2 = Number(read.question("Digite o segundo número: "))

switch (opcao){
            case "soma":
            console.log(`O resultado da soma é: ${adic(n1, n2)}.`)
            break;
        case "sub":    
            console.log(`O resultado da subtração é: ${subt(n1, n2)}.`)
            break;
        case "mult":
            console.log(`O resultado da subtração é: ${mult(n1, n2)}.`)
            break;
        case "div":
            console.log(`O resultado da subtração é: ${div(n1, n2)}.`)
            break;
            default: 
            console.log("Essa opção não é válida!")
            break;
}
    opcao = read.question("Você deseja somar [soma], subtrair [sub], multiplicar [mult], dividir [div] ou sair [sair]: ")
} 

if (opcao == "sair") {
    console.log("======================================")
    console.log("Calculadora finalizada, até a próxima!")
    console.log("======================================")     
}