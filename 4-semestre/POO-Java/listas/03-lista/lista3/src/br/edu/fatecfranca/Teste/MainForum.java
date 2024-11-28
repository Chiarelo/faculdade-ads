package br.edu.fatecfranca.Teste;

import br.edu.fatecfranca.exe01.*;

public class MainForum {
    public static void main(String[] args) {
        Person p1 = new Person(1, "Laura", "andrrade");
        Person p2 = new Person(2, "Vinícius", "Chiarelo");

        Forum forum1 = new Forum(85, "Instagram", "www.instagram.com");
        Forum forum2 = new Forum(16, "WhatsApp", "www.whatsapp.com");

        forum1.addMessages(20, "Bom dia!", p1);
        forum1.addMessages(25, "Boa tarde :)", p2);

        forum2.addMessages(40, "Como vc tá?", p1);
        forum2.addMessages(50, "Indo, e vc?", p2);

        System.out.println(forum1);
        System.out.println(forum2);
    }
}