package br.edu.fatecfranca.exe02;

public abstract class CartaoWeb {
    protected String destinatario;

    //Construtor sem parâmetro
    public CartaoWeb() {
    }

    //Construtor com parâmetro
    public CartaoWeb(String destinatario) {
        this.destinatario = destinatario;
    }

    //Getter
    public String getDestinatario() {
        return destinatario;
    }

    //Setter
    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }

    //ToString
    @Override
    public String toString() {
        return "CartaoWeb{" +
                "destinatario='" + destinatario + '\'' +
                '}';
    }

    public abstract void showMessage();


}
