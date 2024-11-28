programa
{
	inclua biblioteca Matematica --> mat
	funcao inicio()
	{
		inteiro numero, unidade, dezena, centena
		escreva("Informe um número de 3 digitos: ")
		leia(numero)
		limpa()

		unidade = numero % 10
		dezena = (numero / 10) %10
		centena = (numero / 100) %10
		
		escreva("Número inserido: ", numero, "\n\n")
		escreva("Número invertido:", unidade, dezena, centena)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 270; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */