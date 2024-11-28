programa
{
	
	funcao inicio()
	{	
		inteiro num
		
		escreva("Digite um número: ")
		leia(num)

		escreva(divisivel(num))
	}

	funcao cadeia divisivel(inteiro x){
		cadeia msg
		se(x % 6 == 0){
			msg = "Número divisivel por 6"
		}
		senao{
			msg = "Número NÂO divisivel por 6"
		}
		retorne msg
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 182; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */