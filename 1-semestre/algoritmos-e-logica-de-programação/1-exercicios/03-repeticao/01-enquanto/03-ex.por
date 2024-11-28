programa
{
	
	funcao inicio()
	{	
		inteiro numero, cont, resultado
		escreva("Digite um número: ")
		leia(numero)
		cont = 1
		
		enquanto(cont <= 10){
			resultado = numero * cont
			escreva(numero, " * ", cont, " = ", resultado, "\n")
			cont += 1
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 256; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */