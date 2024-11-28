package br.edu.fatecfranca.exe01;

public class Person {
    //Fazendo as primeiras instâncias
    private int id;
    private String nome, user;

    //Criando um construtor vazio
    public Person() {

    }

    //Criando um construtor com os métodos
    public Person(int id, String nome, String user) {
        setId(id);
        setNome(nome);
        setUser(user);
    }

    //Criando os getters

    public int getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getUser() {
        return user;
    }

    //Criando os setters

    public void setId(int id) {
        this.id = id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setUser(String user) {
        this.user = user;
    }

    //Criando o ToString

    @Override
    public String toString() {
        return "\nPerson{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", user='" + user + '\'' +
                '}';
    }

    public void dadosPerson() {
        System.out.println(this.toString());
    }
}
