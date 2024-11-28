package br.edu.fatecfranca.exe01;

import java.util.ArrayList;
import java.util.List;

public class Forum {
    private int id;
    private String name, url;
    private List<Message> messages = new ArrayList<>();

    //Criando o construtor vazio
    public Forum() {
    }

    //Construtor sem array
    public Forum(int id, String name, String url) {
        this.id = id;
        this.name = name;
        this.url = url;
    }

    //Getters

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUrl() {
        return url;
    }

    public List<Message> getMessages() {
        return messages;
    }

    //Setters

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void addMessages(int msgId, String msgText, Person msgPerson){
        this.messages.add(new Message(msgId, msgText, msgPerson));
    }

    @Override
    public String toString() {
        return "\nForum{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", messages=" + messages +
                '}';
    }

    public void dadosForum() {
        System.out.println(this.toString());
    }
}

