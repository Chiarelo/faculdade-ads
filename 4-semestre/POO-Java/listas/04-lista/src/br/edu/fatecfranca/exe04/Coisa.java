package br.edu.fatecfranca.exe04;

public class Coisa {
public String nome;

    public Coisa(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public boolean ganhaDe(Coisa outraCoisa) {
        // Implementação genérica, será sobrescrita nas subclasses
        return false;
    }

    @Override
    public String toString() {
        return "Coisa{" +
                "nome='" + nome + '\'' +
                '}';
    }
}
