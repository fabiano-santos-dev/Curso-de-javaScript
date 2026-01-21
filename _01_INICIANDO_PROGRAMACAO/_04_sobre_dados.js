
/*
  Quando apresentamos dados isolados eles não tem significado por exemplo
  10 é um valor literal, assim como 3.5, esses valores sem um rotulo não tem 
  significado, pode ser qualquer coisa.
  Exemplo:
*/
console.log("Caneta");
console.log(10);
console.log(3.5);
console.log(1.5);
console.log(7.3);

/**
  Com identificação o valor passa a ter um significado
  como segue abaixo
 */
var nome = "caneta";
var quantidade = 10;
var preco = 3.5;
var imposto = 1.5; 
var precoFinal = preco + imposto;

console.log("Nome:",nome);
console.log("Quantidade:",quantidade);
console.log("Preço:",preco);
console.log("Imposto:",imposto);
console.log("Preço Final:",precoFinal);

nome = "Caneta Azul";
console.log(nome);