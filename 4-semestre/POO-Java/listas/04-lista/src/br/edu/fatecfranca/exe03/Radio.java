package br.edu.fatecfranca.exe03;

public class Radio extends Produto{
    private String estacao, banda;

    public Radio() {
        super();
        this.estacao = "";
        this.banda = "";
    }

    public Radio(int serial, int volume, String estacao, String banda) {
        super(serial, volume);
        this.estacao = estacao;
        this.banda = banda;
    }

    public String getEstacao() {
        return estacao;
    }

    public String getBanda() {
        return banda;
    }

    public void setEstacao(String estacao) {
        this.estacao = estacao;
    }

    public void setBanda(String banda) {
        this.banda = banda;
    }

    public String escutar() {
        return "Escutando: " + estacao + " " + banda;
    }

    public void trocaEstacao(String novaEstacao) {
        estacao = novaEstacao;
    }

    public void trocaBanda(String novaBanda) {
        banda = novaBanda;
    }

    @Override
    public String toString() {
       return super.toString() + "\nestacao: " + estacao + "\nbanda: " + banda;
    }
}
