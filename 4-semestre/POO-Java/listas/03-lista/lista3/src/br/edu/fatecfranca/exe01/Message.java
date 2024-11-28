package br.edu.fatecfranca.exe01;

import java.util.List;

public class Message {
    private int id;
    private String text;
    private Person person;

    //criando o construtor sem parâmetro
    public Message() {
    }

    //Criando construtor com paramentro

    public Message(int id, String text, Person msgPerson) {
        setId(id);
        setText(text);
        setPerson(msgPerson);
    }


    //Criando os getters

    public int getId() {
        return id;
    }

    public String getText() {
        return text;
    }

    public Person getPerson() {
        return person;
    }

    //Criando os setters

    public void setId(int id) {
        this.id = id;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    //Criando o ToString


    @Override
    public String toString() {
        return "\nMessage{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", person=" + person +
                '}';
    }

    public void dadosMessage() {
        System.out.println(this.toString());
    }
}
