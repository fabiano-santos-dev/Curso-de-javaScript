for(var i = 0;i <= 10;i++){
    console.log(i);
}

console.log(i);

console.log();
/*
    Como var não é uma função,i tem escopo global
    portanto quando a condição do loop e satisfeita i ainda é incrementada mais uma vez
    imprimindo 11
*/

console.log(j);

for(let j = 0;j <= 10;j++){
    console.log(j);
}
// Aqui vai gerar um erro, porque vai entender que j não foi declarada.
// o que significa que a variável j só funciona dentro do for.