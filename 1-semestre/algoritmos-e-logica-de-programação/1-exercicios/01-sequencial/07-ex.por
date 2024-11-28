programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{	
		real raio, pi, area
		escreva("Informe o raio do circulo: ")
		leia(raio)
		limpa()

		pi = mat.PI
		area = pi * mat.potencia(raio, 2.0)
		

		escreva("A área do circulo é de: ", area)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 254; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */