const leia = require("readline-sync");

console.log("Calculadora de Diferença de Produtos");

const nome = leia.question("\nDigite o seu nome: ")
console.log(`Bem vindo, ${nome}!`);


let n1, n2, n3, n4, calculo

console.log("\nDigite o primeiro número: ");
n1 = leia.questionInt();

console.log("\nDigite o segundo número: ");
n2 = leia.questionInt();

console.log("\nDigite o terceiro número: ");
n3 = leia.questionInt();

console.log("\nDigite o quarto número: ");
n4 = leia.questionInt();

calculo = (n1 * n2) - (n3 * n4);
console.log(`\n${nome}, a diferença entre (n1 * n2) - (n3 * n4) é: ${calculo.toFixed(1)}`);


console.log(`\nObrigado, ${nome}. Até a próxima!`)