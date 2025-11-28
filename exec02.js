const leia = require("readline-sync")

const nome = leia.question("Digite o seu nome: ")
console.log(`Bem vindo, ${nome}!`);


let nota1 = leia.questionFloat(`\nDigite sua primeira nota, ${nome}: `);
console.log(`${nome}, essa é sua primeira nota: ${nota1}`);


let nota2 = leia.questionFloat(`\nDigite sua segunda nota, ${nome}: `);
console.log(`${nome}, essa é sua segunda nota: ${nota2}`);


let nota3 = leia.questionFloat(`\nDigite sua terceira nota, ${nome}: `);
console.log(`${nome}, essa é sua terceira nota: ${nota3}`);


let nota4 = leia.questionFloat(`\nDigite sua quarta nota, ${nome}: `);
console.log(`${nome}, essa é sua quarta nota: ${nota4}`);


let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`\nEssa é a sua média, ${nome}: ${media.toFixed(1)}`);
