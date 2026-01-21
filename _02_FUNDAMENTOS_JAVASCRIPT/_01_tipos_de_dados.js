/**
   JavaScript possui uma tipagem fraca, porque em javaScript a variável pode 
   receber valores diferentes. Numa linguagem fortemente tipada como java por
   exemplo se você definir que a variável e do tipo int (inteiro), ela não acei-
   ta outro valor a menos que seja inteiro.

   Em javaScript o que vai definir o tipo da variável é o valor que ela possuir 
   utilizando a função typeof você consegue ver que tipo a variavel esta interpretando.
 */

// Aqui ela é uma estring, um valor tipo texto.
let qualquer  = 'legal';
console.log(qualquer);
console.log(typeof qualquer);

// Aqui ela é um number, um valor numerico, perceba que ela não foi declarada com tipo number. 
qualquer = 12;
console.log(qualquer);
console.log(typeof qualquer);

// Aqui ela já é um tipo boolean.
qualquer = true;
console.log(qualquer);
console.log(typeof qualquer);

// Aqui ela é um numero real, porem a função a identifica como number.
qualquer = 45.8;
console.log(qualquer);
console.log(typeof qualquer);

// Evitar nome gemericos e siglas
let valor = '';
let numero = 1;
let pqt = false // Produto quimico perigoso ....
