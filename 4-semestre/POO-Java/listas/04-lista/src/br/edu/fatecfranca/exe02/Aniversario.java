package br.edu.fatecfranca.exe02;

public class Aniversario extends CartaoWeb{
    public Aniversario() {
        super();
    }

    public Aniversario(String destinatario) {
        super(destinatario);
    }

    @Override
    public void showMessage() {
        System.out.println("Feliz aniversário, " + destinatario + " Que Deus abençõe sua vida sempre!!");
    }
}
