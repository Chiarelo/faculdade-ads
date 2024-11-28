programa
{
	
	funcao inicio()
	{	
		inteiro n, chute, nTent
		escreva("Informe o número que está pensando: ")
		leia(n)

		nTent = 1

		faca{
			escreva("Tente advinhar o número que esta pensando: ")
			leia(chute)

			se(chute > n){
				escreva("\nChute alto!\n")
			}
			senao se(chute < n){
				escreva("\nchute baixo\n")
			}
			nTent++
			limpa()
		} enquanto(chute != n)

		escreva("Você acertou!!\n")
		escreva("Quantidade de tentativas para acertar o número: ", nTent)
		escreva("\nO número escolhido: ", chute)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 472; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */