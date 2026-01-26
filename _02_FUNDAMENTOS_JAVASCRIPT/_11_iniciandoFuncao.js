/**
   Função é um bloco de código nomeado, para que você possa invocar quando necessario,
   ela é executada trazendo ou não um retorno,depende de como você a estruturou.
   Assim como ela pode receber parametro e retornar algum valor,ou pode receber para-
   metro e não devolver nenhum valor,ou pode não receber parametro e não ter retorno, 
   ou pode simplesmente trazer uma impressão na tela. 
   Exemplos:
*/

// Situações ao chamar essa função

// Essa função imprime a soma mais não retorna nenhum valor
function imprimaSoma(a,b){
    console.log("Soma:",(a + b));
}

imprimaSoma(2,3);

// Se você passar apenas um parametro você vai ter uma impressão NaN,porque?
// Ela vai somar o valor a um valor undefined
imprimaSoma(2);

// Assim como você pode passar valor a mais,ele vai somar os dois valores
// e ignorar o resto
imprimaSoma(3,4,5,6,7,8);

//se você não passar nada também retorna um NaN
imprimaSoma();

//------------------------------------------------------------------------

// Função com retorno
function imprimirSoma2(a,b){
    return a + b;
}

console.log(imprimirSoma2(2,3));

/*
  Outra disponibilidade que javaScrit proporciona e de você
  inicializar o parametro da função,caso não seja passado nenhum valor
  Nesse caso você tem que chamar a função dentro de um console.log();
  porque ela não tem um consele para imprimir o retorno e sim o retorno da 
  função.
*/
function imprimirSoma3(a,b = 1){
    return a + b;
}
console.log(imprimirSoma3(2));
