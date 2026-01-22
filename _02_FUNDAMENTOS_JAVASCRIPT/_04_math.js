/*
  JavaScript possui apis prontas para serem utilizada, ao inves de utilizar 
  varias vezes a multiplicação, você pode simplificar usando Math, que ja 
  disponibiliza funções prontas equivalentes
 */
const raio = 5.6;
const area = Math.PI * Math.pow(raio,2);

console.log(area);
console.log(area.toFixed(2));
console.log(typeof Math);