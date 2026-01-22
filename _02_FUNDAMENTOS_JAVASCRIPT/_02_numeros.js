const peso1 = 1.0;
let peso2 = Number('2.0'); // Convert uma string para um numero 
console.log(peso1,peso2);

console.log(typeof peso1);
console.log(typeof peso2);
console.log(peso1 + peso2);
console.log(Number.isInteger(peso1)); // Verifica se peso1 é um valor inteiro

peso2 = 3.4;
console.log(Number.isInteger(peso2)); // Verifica se peso1 é um valor inteiro e retorna false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);

// Caso você queira diminuir as casas decimais você pode usar a função toFixed();
console.log(media.toFixed(2));

// A função toFixed(2); não autera o valor de media , o valor continua o mesmo.
console.log(media);

// Converte o valor de media para uma string
console.log(typeof media.toString());

// Se você quizer converter media para um valor binario, so colocar
//  o valor 2 no parametro da função mediatoString(2), retorna um valor binario
console.log(media.toString(2));

// Essas funções estão disponiveis para o tipo Number.
console.log(typeof Number) // Retorna que é uma função

// Retorna undefined porque geralmente number demostra o tipo da variavel
// Como aqui ele ta considerando como uma variavel não declarada, retorna undefined
console.log(typeof number) 