package br.edu.fatecfranca.exe05;

public class Cartao {
    private Conta conta;
    private String senha;

    public Cartao(Conta conta, String senha) {
        this.conta = conta;
        this.senha = senha;
    }

    public boolean retirar(float valor, String senha) {
        if (this.senha.equals(senha)) {
            return conta.retirar(valor);
        }
        return false; // Senha incorreta
    }

    public float getSaldo(String senha) {
        if (this.senha.equals(senha)) {
            return conta.getSaldo();
        }
        return -1; // Senha incorreta
    }

    public boolean alterarSenha(String senhaAntiga, String novaSenha) {
        if (this.senha.equals(senhaAntiga)) {
            this.senha = novaSenha;
            return true; // Senha alterada com sucesso
        }
        return false; // Senha antiga incorreta
    }
}
