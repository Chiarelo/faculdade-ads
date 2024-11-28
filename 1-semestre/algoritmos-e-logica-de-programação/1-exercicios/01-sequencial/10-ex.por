programa
{
	
	funcao inicio()
	{
		inteiro notaA, notaB, media
		cadeia aluno
		escreva("Insira o nome do aluno: ")
		leia(aluno)
		escreva("Insira a nota da prova A: ")
		leia(notaA)
		escreva("Insira a nota da prova B: ")
		leia(notaB)
		limpa()

		//Prova A recebe peso dois enquanto a prova B tem peso 1
		
		media = ((notaA * 2) + notaB) / 3

		
		escreva("Nota da prova A", notaA)
		escreva("Nota da prova B", notaB)
		escreva("A média do(a) ", aluno, " foi de: ", media)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 477; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */