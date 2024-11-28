package br.edu.fatecfranca.exe05;

public abstract class Conta {
    protected String nome;
    protected float salario, saldo, limite;
    protected int numeroConta;

    public Conta(String nome, float salario, float saldo, float limite, int numeroConta) {
        this.nome = nome;
        this.salario = salario;
        this.numeroConta = numeroConta;

        if (limite > 0 && limite <= salario) {
            this.limite = limite;
            this.saldo = saldo; // Inicia o saldo com o valor passado
        } else {
            throw new IllegalArgumentException("Limite deve ser menor ou igual ao salário mensal.");
        }
    }

    public abstract boolean retirar(float valor);

    public void depositar(float valor) {
        this.saldo += valor;
    }

    public float getSaldo() {
        return saldo;
    }

    public String getNome() {
        return nome;
    }

    public float getSalario() {
        return salario;
    }

    public int getNumeroConta() {
        return numeroConta;
    }
}
