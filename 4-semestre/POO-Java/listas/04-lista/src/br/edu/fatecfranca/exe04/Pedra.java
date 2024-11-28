package br.edu.fatecfranca.exe04;

    public class Pedra extends Coisa {
        public Pedra() {
            super("Pedra");
        }

        @Override
        public boolean ganhaDe(Coisa outraCoisa) {
            return outraCoisa instanceof Tesoura;
        }
    }

