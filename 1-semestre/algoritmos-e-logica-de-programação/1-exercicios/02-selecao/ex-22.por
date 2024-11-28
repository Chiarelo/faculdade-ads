programa
{
	funcao inicio()
	{
		inteiro numero, numero2, resultado
		caracter operacao
		
		escreva("Informe o primeiro valor: ")
		leia(numero)
		escreva("Informe o segundo valor: ")
		leia(numero2)
		escreva("Informe qual é a operação desejada (+, -, * ou /): ")
		leia(operacao)

		resultado = 0
		escolha(operacao)
		{
			caso '+':
			resultado = numero + numero2 
			pare
			caso '-':
			resultado = numero - numero2
			pare
			caso '*':
			resultado = numero * numero2
			pare
			caso '/':
			resultado = numero / numero2
			pare
			caso contrario:
			escreva("Opção INVALIDA!!")
			pare	
		}
		escreva(numero, " ", operacao, " ", numero2, " = ", resultado)
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 651; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */