package br.edu.fatecfranca.exe04;

public class Tesoura extends Coisa {
    public Tesoura() {
        super("tesoura");
    }
        @Override
        public boolean ganhaDe(Coisa outraCoisa) {
            return outraCoisa instanceof Papel;
        }
    }

