programa
{
	
	funcao inicio()
	{
		inteiro hamburguer, cheeseburger, fritas, refri, milkshake
		real precoH, precoC, precoF, precoR ,precoM, total
		escreva("CARDÁPIO!!!\n")
		escreva("Hambúrguer  R$ 3,00\n")
		escreva("Cheeseburger  R$ 2,50\n")
		escreva("Fritas  R$ 2,50\n")
		escreva("Refrigerante R$ 1,00\n")
		escreva("Milkshake R$ 3,00\n")

		escreva("Quantidade de hambúrgueres que deseja consumir: ")
		leia(hamburguer)
		escreva("Quantidade de cheeseburger que deseja consumir: ")
		leia(cheeseburger)
		escreva("Quantidade de fritas que deseja consumir: ")
		leia(fritas)
		escreva("Quantidade de refrigerante que deseja consumir: ")
		leia(refri)
		escreva("Quantidade de milkshake que deseja consumir: ")
		leia(milkshake)
		limpa()

		precoH = hamburguer * 3.00
		precoC = cheeseburger * 2.50
		precoF = fritas * 2.50
		precoR = refri * 1.00
		precoM = milkshake *  3.00

		total = precoH + precoC + precoF + precoR + precoM
	
		escreva("Quantidade de hambúrgueres consumidos: ", hamburguer, " Total R$ ", precoH ,"\n")
		escreva("Quantidade de cheeseburger consumidos: ", cheeseburger," Total R$ ", precoC , "\n")
		escreva("Quantidade de fritas consumidos: ", fritas," Total R$ ", precoF , "\n")
		escreva("Quantidade de refrigerante consumidos: ", refri, " Total R$ ", precoR , "\n")
		escreva("Quantidade de milkshake consumidos: ", milkshake, " Total R$", precoM , "\n")
		escreva("Total da conta: ", total)
		
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1430; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */