package br.edu.fatecfranca.exe02;

public class Aluno {
    //instanciando váriaveis
    private int id;
    private String name, username;

    //Construtor sem parametros
    public Aluno() {
    }

    //Construtor com parâmetros
    public Aluno(int id, String name, String username) {
        setId(id);
        setName(name);
        setUsername(username);
    }

    //Getters
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
        return "\nAluno{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", username='" + username + '\'' +
                '}';
    }

    //Método pra mostrar o to string de forma mais agíl
    public void dadosAluno(){
        System.out.println(this.toString());
    }
}
