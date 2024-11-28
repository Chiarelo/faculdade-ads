package br.edu.fatecfranca.crudCliente.domain;

public class Cliente {
    private Long id;
    private String email;
    private String telefone;
    private String nome;

    public Cliente() {
    }

    public Cliente(Long id, String email, String telefone, String nome) {
        this.id = id;
        this.email = email;
        this.telefone = telefone;
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getNome() {
        return nome;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
}
