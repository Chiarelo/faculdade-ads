package br.edu.fatecfranca.exe02;

public class Natal extends CartaoWeb {
    public Natal() {
        super();
    }

    public Natal(String destinatario) {
        super(destinatario);
    }

    @Override
    public void showMessage() {
        System.out.println("Feliz Natal, " + destinatario + " Que todos os seus Sonhos se realizem!!");
    }
}
