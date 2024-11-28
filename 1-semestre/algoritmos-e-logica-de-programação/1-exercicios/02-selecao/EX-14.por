programa
{
	inclua biblioteca Matematica --> Mat
	funcao inicio()
	{	
		real preco, desconto, valorFinal, parcelas, juros
		inteiro esc
		escreva(" Insira o preço do produto: ")
		leia(preco)

		escreva(" Digite uma opção para pagamento:\n")
		escreva(" 1. A vista em dinheiro ou cheque, 10% de desconto.\n")
		escreva(" 2. À Vista no cartão de crédito, 5% de desconto\n")
		escreva(" 3. Em 2x sem juros\n")
		escreva(" 4. Em 3x com 10% de juros.\n")
		leia(esc)	
		limpa()
		escolha(esc){
			caso 1:
			desconto = preco * 0.10
			valorFinal = (preco - desconto)
			valorFinal = Mat.arredondar(valorFinal, 2)
			escreva("O preço final com 10% de desconto é: ", valorFinal)
			pare
			caso 2:
			desconto = preco * (5/100.0)
			valorFinal = preco - desconto
			valorFinal = Mat.arredondar(valorFinal, 2)
			escreva("O preço final com 5% de desconto é: ",valorFinal)
			pare
			caso 3:
			parcelas = preco / 2
			parcelas = Mat.arredondar(parcelas, 2)
			escreva("2x de: ", parcelas)
			pare
			caso 4:
			juros = preco * (10/100.0)
			parcelas = (juros + preco) / 3
			parcelas = Mat.arredondar(parcelas, 2)	
			escreva("3x de: ", parcelas)
			pare
			caso contrario:
			escreva("OPÇÂO INVALIDA!!")
		}

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1202; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */