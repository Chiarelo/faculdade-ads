package br.edu.fatecfranca.exe03;

public class Tv extends Produto{
    private String canal;

    public Tv() {
        super();
        this.canal = "";
    }

    public Tv(int serial, int volume, String canal) {
        super(serial, volume);
        this.canal = canal;
    }

    public String getCanal() {
        return canal;
    }

    public void setCanal(String canal) {
        this.canal = canal;
    }

    public String Assitir(){
        return "Assistindo " + canal;
    }

    public void trocaCanal(String novoCanal){
        this.canal = novoCanal;
    }

    @Override
    public String toString() {
        return super.toString() + "\nCanal: " + canal;
    }
}
