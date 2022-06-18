class ContaBancaria{
    constructor(agencia, numero, tipo){
      this._agencia = agencia;
      this._numero = numero;
      this._tipo = tipo;
      this._saldo = 0.00;
    }
    
    sacar(valor){
        if(valor > this._saldo){
            return 'Saldo insuficiente!'
        }
        else{
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
    set saldo(valor){
        this._saldo = valor;
    }
    get saldo(){
        return this._saldo;
    }
}      

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super (agencia, numero);
        this._tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }
    get cartao(){
        return this._cartaoCredito;
    }
    set cartao (valor){
        this._cartaoCredito = valor;
    }
};

class ContaPoupança extends ContaBancaria{
    constructor(agencia, numero){
        this._agencia = agencia;
        this._numero = numero;
        this._tipo = "universitária";
    }
};

class ContaUniversitaria extends ContaBancaria{
    saque(valor){
        if(valor > 500){
            return 'Valor solicitado excede o limite do saque!';
        }
        else{
            this._saldo = this._saldo - valor;
            return this._saldo;
        }
    }
};

const minhaConta = new ContaCorrente(1, 111, true);
const contaUni = new ContaUniversitaria(2, 222);
console.log(minhaConta.depositar(1000));