programa
{
	
	funcao inicio()
	{
		inteiro i, num, result
		escreva("digite -1 para finalizar o programa\n")
		
		i = 0

		faca {
			escreva("Digite um número: ")
			leia(num)
			
			se(num == -1){
				limpa()
				escreva("FIM DO PROGRAMA")
			}
			senao{
				para(i=0; i<=10; i++){
					result = i * num
					escreva(i, " * ", num, " = ", result, "\n")
				}
			}
		} enquanto (num != -1)
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 111; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */