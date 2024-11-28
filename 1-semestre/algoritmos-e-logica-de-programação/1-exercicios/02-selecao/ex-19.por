programa
{
	
	funcao inicio()
	{	
		real preco
		inteiro origem
		cadeia localizacao
		escreva("Informe o preço do produto: ")
		leia(preco)
		escreva("Informe o número da origem do produto (1 a 50): ")
		leia(origem)
		limpa()

		escolha(origem){
			caso 1:
			localizacao = "Sul"
			pare
			caso 2:
			localizacao = "Norte"
			pare
			caso 3:
			localizacao = "Leste"
			pare
			caso 4: 
			localizacao = "Oeste"
			pare
			caso 5:
			localizacao = "Sudeste"
			pare
			caso 6: 
			localizacao = "Centro-Oeste"
			pare
			caso 7: 
			localizacao = "Nordeste"
			caso 8:
			caso 9:
			caso 10:
			localizacao = "Produto importado"
			pare
			caso contrario: 
			localizacao = "Produto Inexistente"
			pare			
		}
			escreva("\nPreço do produto: ", preco)
			escreva("\nNúmero de origem do produto: ", origem)
			escreva("\nLocal da origem: ", localizacao)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 205; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */