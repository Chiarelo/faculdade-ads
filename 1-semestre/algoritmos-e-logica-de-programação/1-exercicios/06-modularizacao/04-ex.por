programa
{
	
	funcao inicio()
	{	
		inteiro num
		escreva("Informe o número: ")
		leia(num)
		limpa()

		escreva("O fatorial de ", num, " é ", fatorial(num))
	}
	funcao inteiro fatorial(inteiro x){
		inteiro i, result = 1
		para(i = 1; i <= x; i ++){
			result *= i
		}
		retorne result
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 275; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */