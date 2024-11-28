programa
{
	
	funcao inicio()
	{
		cadeia nome
		inteiro carrosVendidos, valorVendas, comissaoT
		real porcentagem, porcentagemTotal , totalSalario
		escreva("Nome do vendedor: ")
		leia(nome)
		escreva("\nNúmero de carros vendidos: ")
		leia(carrosVendidos)
		escreva("\nValor total das vendas: ")
		leia(valorVendas)

		porcentagem = 0.05
		porcentagemTotal = porcentagem * valorVendas
		comissaoT = 50 * carrosVendidos
		totalSalario = porcentagemTotal + comissaoT + 500

		escreva("Nome do funcionário: ", nome, "\n")
		escreva("Quantidade de carros vendidos: ", carrosVendidos, "\n")
		escreva("Valor total das vendas de carro R$ ", valorVendas, "\n")
		escreva("Comissão do valor das vendas R$ ", porcentagemTotal, "\n")
		escreva("Comissão da quantidade de carros ", comissaoT, "\n")
		escreva("\nNovo salário é de: ", totalSalario)
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 204; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */