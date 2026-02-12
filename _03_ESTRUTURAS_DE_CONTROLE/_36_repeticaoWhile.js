function inteiroAleatorioEntre(min,max){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

let opcao = inteiroAleatorioEntre(-1,10);

while(opcao != -1){
    opcao = inteiroAleatorioEntre(-1,10);
    console.log(`Opção escolhida foi: ${opcao}`);
}

console.log("Até a próxima!");