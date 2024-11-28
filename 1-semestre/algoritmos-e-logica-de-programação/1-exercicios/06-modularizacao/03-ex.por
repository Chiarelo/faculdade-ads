programa
{
	
	funcao inicio()
	{
		inteiro num
		escreva("Digite um número: ")
		leia(num)

		se(num <= 1){
			escreva("Números menores ou iguais a 1 não são considerados primos!")
		}
		senao{
			escreva(primo(num))
		}
		
	}

	funcao cadeia primo(inteiro x){
		inteiro cont = 1, numDiv = 0
		enquanto(cont <= x){
			se(x % cont == 0){
				 numDiv = numDiv + 1
			}
			cont++
		}

		se(numDiv == 2){
			retorne "O número digitado é primo"
		}
		senao{
			retorne "O número digitado NÃO é primo"
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 343; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numDiv, 20, 20, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */