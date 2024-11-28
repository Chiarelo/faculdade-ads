programa
{
	
	funcao inicio()
	{
		inteiro numero1, numero2
		escreva("Insira um número: ")
		leia(numero1)
		escreva("\nInsira outro número: ")
		leia(numero2)

		se(numero1 > numero2){
			escreva("A ordem decrescente dos números digitados é: ", numero1, " ,", numero2)
		}
		senao{
			escreva("A ordem decrescente dos números digitados é: ", numero2, " ,", numero1)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 264; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */