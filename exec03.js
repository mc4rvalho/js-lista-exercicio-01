const leia = require("readline-sync")

const nome = leia.question("Digite o seu nome: ")
console.log(`Bem vindo, ${nome}!`);


let salarioBruto = leia.questionFloat(`\nDigite o seu Salário, ${nome}: `);
console.log(`${nome}, essa é o seu Salário: R$${salarioBruto}`);

let adicionalNoturno = leia.questionFloat(`\nDigite o seu Adicional Noturno, ${nome}: `);
console.log(`${nome}, essa é o seu Adicional Noturno: R$${adicionalNoturno}`);

let horasExtras = leia.questionFloat(`\nDigite as suas horas extras, ${nome}: `);
console.log(`${nome}, essa é a sua hora extra até agora: ${horasExtras}h`);

let descontos = leia.questionFloat(`\nDigite o seu desconto no salário, ${nome}: `);
console.log(`${nome}, essa é o desconto no seu salário: R$${descontos}`);

let salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos);
console.log(`\nEssa é o seu Salário Líquido, ${nome}: R$${salarioLiquido}.`);


console.log(`\nObrigado, ${nome}. Até a próxima!`)