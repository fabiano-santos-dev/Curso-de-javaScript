const nome = "Santos";
// Retorna o valor da String no indice 4
console.log(nome.charAt(3));

// Retorna o valor na tabela ASCCI
console.log(nome.charCodeAt(3));

// Eu tenho  o valor,e quero saber o indice em que posição que esta
console.log(nome.indexOf('t')); 

// Imprimindo substrig
// Retira os primeiros valores,conforme passado por parametro
console.log(nome.substring(1));

// Pega a partir do primeiro indice passdo, e va até o ultimo indice passado porem 
// não inclua o ultimo indice
console.log(nome.substring(0,3));
console.log(nome.substring(1,3));

// Concatenando
console.log("Meu nome é Fabiano Alves ".concat(nome));
console.log("Meu nome é Fabiano Alves " + nome); //Tambem funciona

// Utilizando replace();
console.log(nome.replace('t','F'));

// Transformar uma String em um array
console.log('Fabiano,Maria,Tati'.split(','));