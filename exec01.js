const leia = require("readline-sync")

const nome = leia.question("Digite o seu nome: ")
console.log(`Bem vindo, ${nome}!`);

let salario = leia.questionFloat("\nDigite o seu salário: ")
console.log(`Esse é o seu salário R$${salario}, ${nome}`);

let abono = leia.questionFloat("\nDigite o seu abono: ");
console.log(`Esse é o seu abono R$${abono}, ${nome}`);

let novoSalario = salario + abono;
console.log(`\nEste é o seu novo salário R$${novoSalario}, ${nome}`);
