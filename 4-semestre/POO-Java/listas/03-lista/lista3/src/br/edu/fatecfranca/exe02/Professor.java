package br.edu.fatecfranca.exe02;

public class Professor {
    //Instanciando objeto
    private int id;
    private String name, username;

    //Construtor sem parâmetro
    public Professor() {
    }

    //Criando construtor com parâmetro
    public Professor(int id, String name, String username) {
        setId(id);
        setName(name);
        setUsername(username);
    }

    //Criando os getters
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    //Setters
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    //ToString

    @Override
    public String toString() {
        return "\nProfessor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                '}';
    }

    //Métodos
    public void dadosProfessor() {
        System.out.println(this.toString());
    }
}
