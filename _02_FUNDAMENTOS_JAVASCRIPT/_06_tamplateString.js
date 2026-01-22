/*
 as vezes uma String comcatenada se torna muito grnade,ai é interessante usar 
 o conceito de tamplate string
*/

const nome = 'Rafael';
const concatenacao = 'Ola! meu nome é' + nome + '!';

const template = ` Ola! meu nome é ${nome} !`;
console.log(template);

// Você pode fazer expressoes tambem dentro do tamplate String
console.log(`1 + 1 = ${1 + 1}`);

// Você pode també passar funções para um tamplate String
const maiuscula = texto => texto.toUpperCase();
console.log(`Ei... ${maiuscula("cuidado")}!`);