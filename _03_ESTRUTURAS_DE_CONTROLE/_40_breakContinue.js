const valores = [1,2,3,4,5,6,7,8,9,10];

for(let nota in valores){
    if(nota == 5){
      break; // Chegou no indice 5 ele para.
    } 
    console.log(`${nota} = ${valores[nota]}`);
}

console.log();

for(let nota2 in valores){
    if(nota2 == 5){
        continue;
        //Aqui ele interrompe a operação no indice 5 e continua 
        // a partir do indice 6  na próxima linha.
    }
    console.log(`${nota2} = ${valores[nota2]}`);
}