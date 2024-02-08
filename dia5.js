const read = require('readline-sync');

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let addLista = read.question('você deseja adicionar uma comida na sua lista de compras? [sim] ou [nao]: ')

while (addLista == "sim") {
let addComida = read.question('qual comida você deseja inserir? ')
let addCategoria = read.question('frutas, legumes, laticinios, congelados ou doces? ')
if (addCategoria === "frutas"){
    frutas.push(addComida);
} else if (addCategoria ==="laticinios") {
    laticinios.push(addComida)
} else if (addCategoria === "congelados") {
    congelados.push(addComida)
} else if (addCategoria === "doces") {
    doces.push(addComida)
} else {
    console.log("Essa categoria não foi definida")
}
addLista = read.question('você deseja adicionar mais uma comida na sua lista de compras? [sim] ou [nao]: ')
}
console.log(`A lista de comptas ficou: frutas: ${frutas}, laticinios: ${laticinios}, congelados: ${congelados} e doces: ${doces}.`)