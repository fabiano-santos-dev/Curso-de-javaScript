// Forma literal de função
function fun1(){

}

// Armazenar em uma variável
const fun2 = function (){

}

// Armazenada em um array
const array = [function (a,b){return a + b},fun1,fun2];

console.log(array[0](2,3));

const obj = {};

obj.frase = function (){ return "Seu nome é Fabiano Alves Santos"};
console.log(obj.frase());

// Função com parametro
function run(fun){
    fun();
}

run(function (){ console.log("Deu certo :) !!!")});


// Uma função pode retornar ou conter uma função
function soma(a,b){
    return function(c){
        console.log(a + b + c)
    }
}

// Uma das formas de executar 
soma(2,3)(4); 

console.log();

// UIma segunda forma de executar
const valorFinal = soma(2,3);
valorFinal(4);