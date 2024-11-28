programa
{
	
	funcao inicio()
	{
		inteiro num1, num2, resultado
		cadeia operacao
		escreva("Digite o valor do primeiro número: ")
		leia(num1)
		escreva("Digite o valor do segundo número: ")
		leia(num2)

		escreva("Digite a operação aritmética desejada (+, -, *, /): ")
		leia(operacao)
		limpa()

		se(operacao == "+"){
			resultado = num1 + num2
			escreva("O resultado da adição de ", num1, " + ", num2, " é: ", resultado)
		}senao
		se(operacao == "-"){
			resultado = num1 - num2
			escreva("O resultado da subtração de ", num1, " - ", num2, " é: ", resultado)
		}senao 
		se(operacao == "*"){
			resultado = num1 * num2
			escreva("O resultado da multiplicação de ", num1, " * ", num2, " é: ", resultado)
		}senao
		se(operacao == "/"){
			resultado = num1 / num2
			escreva("O resultado da subtração de ", num1, " / ", num2, " é: ", resultado)			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 305; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */