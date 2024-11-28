programa
{
	
	funcao inicio()
	{
		inteiro i, soma
		i = 1
		soma = 0
		
		enquanto(i <= 500){
			se(i % 2 == 1 e i % 3 == 0){
				soma = soma + i
			}
			i++
		}

		escreva("A soma dos números ímpares e divisíveis por 3 é: ", soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 167; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */