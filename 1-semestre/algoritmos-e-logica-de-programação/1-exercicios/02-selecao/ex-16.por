programa
{
	
	funcao inicio()
	{
	
		inteiro qntd_maxima, qntd_minima, qntd_atual, qntd_media
		escreva("Informe a quantidade atual do produto em estoque: ")
		leia(qntd_atual)
		escreva("Informe a quantidade maxima do produto em estoque: ")
		leia(qntd_maxima)
		escreva("Informe a quantidade minima do produto em estoque: ")
		leia(qntd_minima)
		limpa()
		qntd_media = (qntd_maxima + qntd_minima) / 2


		escreva("Qtde Atual = ", qntd_atual, "\n")
		escreva("Qtde Máxima = ", qntd_maxima, "\n")
		escreva("Qtde Mínima = ", qntd_minima, "\n")
		escreva("Média = ", qntd_media, "\n")

		se(qntd_atual >= qntd_media){
			escreva("NÃO efetuar compra!")
		}senao{
			escreva("EFETUAR compra")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 700; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */