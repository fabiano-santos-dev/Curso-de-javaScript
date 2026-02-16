function area(largura,altura){
  const area = largura * altura;
  if(area > 20){
    console.log(`Valor acima do permitido : ${area}M²`);
  }else{
    return area;
  }
}

// Com os  parametros corretos
console.log(area(2,2));

// Com um parametro undefined
console.log(area(2))

// Sem passar parametro nenhum
console.log(area());

// Com parametros a mais
console.log(area(2,3,4,5,6,7));

console.log(area(5,5));