/*
  try (Quer dizer tentar)
  try é um bloco que potencialmente pode aver um tipo de erro, associado a ele tem 
  um bloco catch, quando a um erro no tray automaticamente ele vai para o catch. 
*/

function tratarErro(erro){
    throw new Error('Não deu certo passar para maiúscula .....');
}
function imprimirNomeGritado(ogj) {
    try{
        console.log(Object.nome.toUpperCase());
    }catch(e){
        tratarErro(e)
    }finally{
        console.log("Fim !!!");
    }
}

const obj = {
    nome:"Fabiano Alves Santos"
}

imprimirNomeGritado(obj);