//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package br.edu.fatecfranca.exe00;

public class Compra {
    private float valor;
    private int qtde;
    private String situacao;

    public Compra() {
    }

    public Compra(float valor, int qtde, String situacao) {
        this.setValor(valor);
        this.setQtde(qtde);
        this.setSituacao(situacao);
    }

    public void setValor(float valor) {
        if (valor >= 0.0F) {
            this.valor = valor;
        } else {
            System.out.println("Valor inválido");
            this.valor = 0.0F;
        }

    }

    public void setQtde(int qtde) {
        if (qtde >= 0) {
            this.qtde = qtde;
        } else {
            System.out.println("Qtde inválida");
            this.qtde = 0;
        }

    }



    public void setSituacao(String situacao) {
        if (!situacao.equals("Aprovado") && !situacao.equals("Reprovado") && !situacao.equals("Pendente")) {
            System.out.println("Situação inválida");
            this.situacao = "Reprovado";
        } else {
            this.situacao = situacao;
        }

    }

    public float getValor() {
        return this.valor;
    }

    public float getQtde() {
        return (float)this.qtde;
    }

    public String getSituacao() {
        return this.situacao;
    }

    public String toString() {
        return "Compra{valor=" + this.valor + ", qtde=" + this.qtde + ", situacao='" + this.situacao + "'}";
    }
}
