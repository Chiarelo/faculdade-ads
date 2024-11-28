programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro A, B, C, x1, x2, delta
		escreva("Informe o valor de A: \n")
		leia(A)
		escreva("Informe o valor de B: \n")
		leia(B)
		escreva("Informe o valor de C: \n")
		leia(C)
		limpa()

		delta = mat.potencia(B, 2.0) -4 * A * C

		x1 = (-B + mat.raiz(delta, 2)) / (2 * A)
		x2 = (-B - mat.raiz(delta, 2)) / (2 * A)

		escreva("Valor de delta: ", delta, "\n")
		escreva("Valor de x1: ", x1, "\n")
		escreva("Valor de x2 ", x2)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 261; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */