package br.edu.fatecfranca.exe05;

public class ContaEspecial extends Conta {
    public ContaEspecial(String nome, float salario, float saldo, float limite, int numeroConta) {
        super(nome, salario, saldo, limite, numeroConta);


    }

    @Override
    public boolean retirar(float valor) {
        if (valor > 3 * salario) {
            System.out.println("Erro: O valor solicitado excede o limite permitido (3x o salário).");
            return false;
        }
        else {
            saldo -= valor;
            return true;
        }
    }
}

