//Armazenando uma função dentro de uma variável
const imprimirSoma = function(a,b){
    console.log(a + b);
}

imprimirSoma(2,9);

// Armazenando uma função arrow em uma variável
const soma = (a,b) => {
    return a + b;
}

console.log(soma(2,3));

// Retorno implicito
const subtracao = (a,b) => a - b;
console.log(subtracao(2,3));

// Forma mais contraida de função
const imprimir3 = param => console.log(param);
imprimir3("Parametro passado com sucesso!!");