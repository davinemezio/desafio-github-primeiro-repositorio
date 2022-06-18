function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa =  {nome: "Davi", idade:50};

console.log(calculaIdade.call(pessoa,30));

console.log(calculaIdade.apply(pessoa, [30]));
