package br.edu.fatecfranca.teste;
import br.edu.fatecfranca.exe05.*;

public class MainConta {
    public static void main(String[] args) {
        // Criando uma conta especial
        Conta contaEspecial = new ContaEspecial("Bob", 4000, 1500, 1200, 67890);

        // Criando cartão para a conta especial
        Cartao cartaoBob = new Cartao(contaEspecial, "senha456");

        // Operações na conta especial
        System.out.println("Saldo Bob: " + cartaoBob.getSaldo("senha456"));
        boolean retirouEspecial = cartaoBob.retirar(3000, "senha456");
        System.out.println("Retirada Bob de 3000: " + (retirouEspecial ? "Sucesso" : "Falha"));
        System.out.println("Saldo Bob após retirada: " + cartaoBob.getSaldo("senha456"));

        // Alterando a senha do cartão de Bob
        boolean senhaAlterada = cartaoBob.alterarSenha("senha456", "novaSenha");
        System.out.println("Senha de Bob alterada: " + (senhaAlterada ? "Sucesso" : "Falha"));

        // Acessando saldo com a nova senha
        System.out.println("Saldo Bob com nova senha: " + cartaoBob.getSaldo("novaSenha"));
    }
}
