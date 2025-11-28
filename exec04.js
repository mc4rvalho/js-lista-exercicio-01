const leia = require("readline-sync");

console.log("Calculadora de Diferença de Produtos");

const nome = leia.question("\nDigite o seu nome: ")
console.log(`Bem vindo, ${nome}!`);


let n1 = leia.questionInt("\nDigite o primeiro número: ");

let n2 = leia.questionInt("\nDigite o segundo número: ");

let n3 = leia.questionInt("\nDigite o terceiro número: ");

let n4 = leia.questionInt("\nDigite o quarto número: ");

let calculo = (n1 * n2) - (n3 * n4);
console.log(`\nDiferença: ${calculo.toFixed(1)}`);
