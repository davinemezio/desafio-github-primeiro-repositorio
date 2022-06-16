/* Atividade do curso de sintaxe
Criar uma funçao com as seguintes regras:
a - Receba dois números como parâmetros;
b - Confira se os números são iguais;
c = Confira se a soma dos números e maior que 10 ou menor que 20;
d - retorne uma string dizendo: "os número num1 e num 2 não/são iguais. Sua soma é soma, que é menor/maior 10 e menor/maior que 20."
*/

let n1 = Number(prompt('Insira o primeiro número:'));
let n2 = Number(prompt('Insira o segundo número:'));
let comparacao;
let soma;
let m10;
let m20;


function numeros(a, b){
    soma = n1 + n2;
    n1===n2 ? comparacao = 'são': comparacao = 'não são';
    soma > 10 ? m10 = 'maior': m10 = 'menor';
    soma > 20 ? m20 = 'maior': m20 = 'menor';

    alert(`Os números ${n1} e ${n2} ${comparacao} iguais. Sua soma é ${soma}, que é ${m10} que 10 e ${m20} que 20.`);
}
numeros(n1,n2);