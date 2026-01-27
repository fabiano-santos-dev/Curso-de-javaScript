// Em javaScript o escopo para var é global fora de função e para blocos de código
// também funcionam como escopo global.

// Bloco de código funciona como escopo global,exemplo
{ { { { var teste = 12; } } } }
console.log(teste);

function teste2(){
    var nome = 'teste!';
    console.log(nome);
}

teste2();
//console.log(nome);