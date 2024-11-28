package br.edu.fatecfranca.exe01;

public class Cliente {
    private String numeroConta;
    private String numeroAgencia;
    private String nome;
    private float saldo;

    // Construtor padrão com valores default
    public Cliente() {
        this.numeroConta = "00000000";
        this.numeroAgencia = "000000";
        this.nome = "Desconhecido";
        this.saldo = 0;
    }

    // Construtor com parâmetros
    public Cliente(String numeroConta, String numeroAgencia, String nome, float saldo) {
        setNumeroConta(numeroConta);
        setNumeroAgencia(numeroAgencia);
        setNome(nome);
        setSaldo(saldo);
    }

    // Getter e Setter para numeroConta
    public String getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(String numeroConta) {
        if (numeroConta.length() == 8 && numeroConta.charAt(6) == '-') {
            this.numeroConta = numeroConta;
        } else {
            System.out.println("Erro: O número da conta deve ter 8 caracteres, incluindo o traço.");
        }
    }

    // Getter e Setter para numeroAgencia
    public String getNumeroAgencia() {
        return numeroAgencia;
    }

    public void setNumeroAgencia(String numeroAgencia) {
        if (numeroAgencia.length() == 6 && numeroAgencia.charAt(4) == '-') {
            this.numeroAgencia = numeroAgencia;
        } else {
            System.out.println("Erro: O número da agência deve ter 6 caracteres, incluindo o traço.");
        }
    }

    // Getter e Setter para nome
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        if (nome.length() <= 30) {
            this.nome = nome;
        } else {
            System.out.println("Erro: O nome do cliente não pode ultrapassar 30 caracteres.");
        }
    }

    // Getter e Setter para saldo
    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        if (saldo >= 0) {
            this.saldo = saldo;
        } else {
            System.out.println("Erro: O saldo não pode ser negativo.");
        }
    }

    // Método para realizar depósito
    public void realizarDeposito(float valor) {
        if (valor > 0) {
            saldo += valor;
        } else {
            System.out.println("Erro: O valor do depósito deve ser positivo.");
        }
    }

    // Método para realizar saque
    public void realizarSaque(float valor) {
        if (valor > 0) {
            if (valor <= saldo) {
                saldo -= valor;
            } else {
                System.out.println("Erro: Saldo insuficiente para saque.");
            }
        } else {
            System.out.println("Erro: O valor do saque deve ser positivo.");
        }
    }

    // Método para imprimir dados do cliente
    public void imprimirDados() {
        System.out.println("Número da Conta: " + numeroConta);
        System.out.println("Número da Agência: " + numeroAgencia);
        System.out.println("Nome do Cliente: " + nome);
        System.out.println("Saldo Atual: " + saldo);
    }
}

