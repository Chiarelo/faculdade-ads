programa
{
	
	funcao inicio()
	{
	
		real comprimento, largura, area

		faca{
			escreva("Informe o comprimento(m): ")
			leia(comprimento)
			escreva("Informe a largura(m): ")
			leia(largura)

			limpa()
			area = comprimento * largura
			escreva("Comprimento do retângulo: ", comprimento, "m\n")
			escreva("Largura do retângulo: ", largura, "m\n")
			escreva("Área do retângulo: ", area, "m")
		} enquanto(comprimento > 0 e largura > 0)

		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 176; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */