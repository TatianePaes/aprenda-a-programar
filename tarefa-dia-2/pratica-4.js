let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

//console.log(produtoA)
//console.log(produtoA.nome)
//console.log(produtoB.nome)

if (produtoA.internacional) {
    console.log('Nome do Produto: ' + produtoA.nome + ', valor total (com impostos): ' + produtoA.valor * 1.2);
} else {
    console.log('Nome do Produto: ' + produtoA.nome + ', valor total (com impostos): ' + produtoA.valor * 1.12);
}

if (produtoB.internacional) {
    console.log('Nome do Produto: ' + produtoB.nome + ', valor total (com impostos): ' + produtoB.valor * 1.2);
} else {
    console.log('Nome do Produto: ' + produtoB.nome + ', valor total (com impostos): ' + produtoB.valor * 1.12);
}

if (produtoC.internacional) {
    console.log('Nome do Produto: ' + produtoC.nome + ', valor total (com impostos): ' + produtoC.valor * 1.2);
} else {
    console.log('Nome do Produto: ' + produtoC.nome + ', valor total (com impostos): ' + produtoC.valor * 1.12);
}