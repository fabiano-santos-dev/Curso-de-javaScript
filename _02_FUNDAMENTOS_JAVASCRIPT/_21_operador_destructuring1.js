// Novo recurso do ES2015
// O operador destructuring serve para você retirar de dentro de um objeto,
// valores de variaveis que você necessite utilizar. 
const pessoa = {
    nome:"Tatiana",
    idade:47,
    endereco:{
        logradouro:"Rua Ç",
        bairro:"Açude"
    }
}

const {nome,idade} = pessoa;
console.log(nome);
console.log(idade);

console.log();

// Caso você precise pode criar variáveis com outro nome para receber esses valores do objeto.
const {nome:i,idade:h} = pessoa;
console.log(i);
console.log(h);

// Retirar o valor de dentro do objeto,que está dentro desse objeto
const {endereco:{logradouro,bairro}} = pessoa;
console.log("Rua: ",logradouro);
console.log("Bairro: ",bairro);

// Caso você tente acessar alguma variável que não existe no objeto 
// ou gera um erro, ou retorna um andefined
const {email,telefone} = pessoa;
console.log(email);
console.log(telefone);