programa
{
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real prestacao, acrescimo, porcentagem, desconto, valorFinal, prejuizo
		escreva("Informe o valor da prestação em atraso: ")
		leia(prestacao)
		limpa()

		//10% de acrescimo sobre a prestação e depois um desconto de 10% 
		
		//Calcular o Acrescimo de 10%
		acrescimo = prestacao * 0.10
		acrescimo = mat.arredondar(acrescimo, 2)

		//Calcular o desconto de 10% sobre o novo valor
		desconto = acrescimo * 0.10
		desconto = mat.arredondar(desconto, 2)
		
		valorFinal = (prestacao + acrescimo) - desconto

		//Prejuizo do comerciante
		prejuizo = acrescimo - desconto
		prejuizo = mat.arredondar(prejuizo, 3)

		escreva("Valor da prestação inserido: ", prestacao, "\n")
		escreva("Valor do acrescimo: ", acrescimo, "\n")
		escreva("Valor do desconto: ", desconto, "\n")
		escreva("Valor final a pagar: ", valorFinal, "\n")
		escreva("Prejuízo do comerciante: ", prejuizo)
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 956; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */