package br.edu.fatecfranca.exe02;

public class DiaDosNamorados extends CartaoWeb {
    //Construtor vazio
   public DiaDosNamorados(){
       super();
   }

   //Construtor com parâmetro
    public DiaDosNamorados(String destinatario) {
        super(destinatario);
    }

    @Override
    public void showMessage() {
        System.out.println("Feliz dia dos namorados, " + destinatario + " Que o amor de vocês ilumine o mundo!!");
    }
}
