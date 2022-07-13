public class Main {

	public static void main(String[] args) {
		Cliente davi = new Cliente();
		davi.setNome("Davi");
		
		Conta cc = new ContaCorrente(davi);
		Conta poupanca = new ContaPoupanca(davi);

		cc.depositar(1500);
		cc.transferir(500, poupanca);
		
		cc.imprimirExtrato();
		poupanca.imprimirExtrato();
	
	   Cliente nathan = new Cliente();
	   nathan.setNome("Nathan");
	
	   Conta ce = new ContaUniversitaria(nathan);
	
	   ce.depositar(2500);
       ce.sacar(500);
	   ce.imprimirExtrato();
	}
}