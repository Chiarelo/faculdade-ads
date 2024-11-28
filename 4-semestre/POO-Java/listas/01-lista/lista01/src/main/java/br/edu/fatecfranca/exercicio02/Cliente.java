package br.edu.fatecfranca.exercicio02;

public class Cliente {
    public int numeroConta;
    public int numeroAgencia;
    public String nome;
    public double saldo;

    public Cliente(int numeroConta, int numeroAgencia, String nome, double saldo) {
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;

    }

    public Cliente(){
        this.nome = " ";
    }

    public void realizarDeposito(double valor) {
        System.out.println("Saldo inicial: " + this.saldo);
        if (valor > 0) {
            this.saldo += valor;
            System.out.println("Valor do deposito: " + valor);
        }
        else{
            System.out.println("Deposito invalido!");
        }
    }

    public void realizarSaque(double valor) {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            System.out.println("Valor do saque: " + valor);
        }
        else{
            System.out.println("Saque invalido!");
        }
    }
    public void dadosCliente(){
        System.out.println("Número de Conta: " + this.numeroConta);
        System.out.println("Número da agencia: " + this.numeroAgencia);
        System.out.println("Nome: " + this.nome);
        System.out.println("Saldo: " + this.saldo + "\n");
    }
}
