package br.edu.fatecfranca.exe03;

public class Produto {
    protected int serial, volume;
    protected String string;
    protected boolean teste;

    public Produto() {
        this.serial = 0;
        this.volume = 0;
    }

    public Produto(int serial, int volume) {
        this.serial = serial;
        this.volume = volume;
        this.string = "naõ testado";
        this.teste = false;
    }

    public int getSerial() {
        return serial;
    }

    public int getVolume() {
        return volume;
    }

    public String getString() {
        return string;
    }

    public boolean isTeste() {
        return teste;
    }

    public void setSerial(int serial) {
        this.serial = serial;
    }

    public void setString(String string) {
        this.string = string;
    }

    public void setTeste(boolean teste) {
        this.teste = teste;
    }

    public boolean testaUnidade(){
        if (teste){
            System.out.println("Este produto já foi testado");
            return false;
        }
        teste = true;

        double resultadoTeste = java.lang.Math.random();

        if(resultadoTeste < 0.9){
            string = "aprovado";
            return true;
        }
        else {
            string = "reprovado";
            return false;
        }
    }

    public void setVolume(int x) {
        this.volume = x;
    }

    @Override
    public String toString() {
        return "\nProduto{" +
                "serial=" + serial +
                ", volume=" + volume +
                ", string='" + string + '\'' +
                ", teste=" + teste +
                '}';
    }
}
