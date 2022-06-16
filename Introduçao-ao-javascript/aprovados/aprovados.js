const classe = [{nome:'davi', media:6},{nome:'kennia', media:7},{nome:'nathan', media:8},];

function aprovados(alunos, media){
    let soAprovados = [];
    for (let i = 0; i < alunos.length; i++){
    if(alunos[i].media >= media){ 
        soAprovados.push(alunos[i].nome);
        console.log(`o ${alunos[i].nome} tirou media ${alunos[i].media}. Resultado: Aprovado!`)
    } else{
        console.log(`o ${alunos[i].nome} tirou media ${alunos[i].media}. Resultado: Reprovado!`)
    }
  }
  return soAprovados;
}
console.log(aprovados(classe, 7));
