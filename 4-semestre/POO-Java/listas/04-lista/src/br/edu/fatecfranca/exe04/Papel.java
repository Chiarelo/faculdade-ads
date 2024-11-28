package br.edu.fatecfranca.exe04;

public class Papel extends Coisa {
    public Papel() {
        super("Papel");
    }

    @Override
    public boolean ganhaDe(Coisa outraCoisa) {
        return outraCoisa instanceof Pedra;
    }
}