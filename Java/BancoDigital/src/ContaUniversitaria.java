
public class ContaUniversitaria extends Conta{
	public ContaUniversitaria(Cliente cliente) {
		super(cliente);
	}

	@Override
	public void imprimirExtrato() {
		System.out.println("=== Extrato Conta Corrente ===");
		super.imprimirInfosComuns();
	}
	
	@Override
	public void sacar(double valor) {
		if(valor > 500) {
		System.out.println("=== Excedeu limite de saque ===");
	}   else {
		System.out.println(String.format("=== Realizado saque no valor de R$ %.2f",valor));
	}
		saldo-=valor;
  }
}