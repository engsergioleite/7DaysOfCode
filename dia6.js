const read = require('readline-sync');

let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let itensRemovidos = [];


console.log("---------------------------------------------------------------------------------------------------------")
console.log(`A lista de compras contém: frutas: ${frutas}, laticinios: ${laticinios}, congelados: ${congelados} e doces: ${doces}.`)
let addLista = read.question('você deseja adicionar [sim] / [nao] ou remover [remover] algo da sua lista de compras? ')
while (addLista == "sim" || addLista == "remover"){
    while (addLista == "sim") {
        let addComida = read.question('qual comida você deseja inserir? ')
        let addCategoria = read.question('frutas, laticinios, congelados ou doces? ')
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
        addLista = read.question('você deseja adicionar [sim], remover [remover] ou finalizar [nao] sua lista de compras? ')
        console.log('você finalizou a adição de itens.')
        }
   
    while (addLista == "remover") {
    console.log(`A lista de compras contém: frutas: ${frutas}, laticinios: ${laticinios}, congelados: ${congelados} e doces: ${doces}.`)
    let remComida = read.question('Escolha qual comida deseja retirar da lista: ')
    let remCategoria = read.question(' Pertenca a qual categoria: [frutas], [laticinios], [congelados] ou [doces]? ')
    // criar metodo para remover o item e categoria e criar um array com itens que foram removidos para listar 
        if (remCategoria == "frutas"){
        frutas.splice(remComida)
        itensRemovidos.push(remComida)
        } else if (remCategoria == "laticinios") {
        laticinios.splice(remComida)
        itensRemovidos.push(remComida)
        } else if (remCategoria == "congelados") {
        congelados.splice(remComida)
        itensRemovidos.push(remComida)
        } else if (remCategoria == "doces") {
        doces.splice(remComida)
        itensRemovidos.push(remComida)
        } else {
        console.log("Item invalido!")
        }
    console.log(`O item ${remComida} foi removiso com sucesso! `)
    addLista = read.question('você deseja adicionar [sim], remover [remover] ou finalizar [nao] sua lista de compras? ')
    } 
}
    if (addLista == "nao") {
    console.log(`A lista de itens removidos foi: ${itensRemovidos}`) //LISTAR O ARRAY DE PRODUTOS REMOVIDOS
    }

console.log(`A lista de compras ficou: frutas: ${frutas}, laticinios: ${laticinios}, congelados: ${congelados} e doces: ${doces}.`)

