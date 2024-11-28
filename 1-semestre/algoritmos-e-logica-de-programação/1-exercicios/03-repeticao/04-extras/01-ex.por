programa
{
	inclua biblioteca Matematica --> mat
	inclua biblioteca Texto --> txt
	
	funcao inicio()
	{	
		cadeia resposta
		inteiro totalV, branco, tinto, rose
		real porcB, porcT, porcR

		totalV = 0
		branco = 0
		tinto = 0
		rose = 0

		faca{
			escreva("Digite T para vinho tinto!\n")
			escreva("Digite B para vinho branco!\n")
			escreva("Digite R para vinho rose!\n")
			escreva("Digite F finalizar o programa\n")
			leia(resposta)
			resposta = txt.caixa_alta(resposta)
			limpa()
			
			se(resposta == "T"){
				totalV = totalV + 1
				tinto = tinto + 1
			}
			senao se(resposta == "B"){
				totalV = totalV + 1
				branco = branco + 1
			}
			senao se (resposta == "R"){
				totalV = totalV + 1
				rose = rose + 1
			}
			senao{
				escreva("DADOS INVALIDOS!!\n")
			}
			
		} enquanto(resposta != "F")

			limpa()
			se(totalV != 0){
			porcT = mat.arredondar((tinto * 100.0) / totalV, 2)
			porcB = mat.arredondar((branco * 100.0) / totalV, 2)
			porcR = mat.arredondar((rose * 100.0) / totalV, 2)
	
			escreva("Quantidade total de vinhos: ", totalV, "\n")
			escreva("Quantidade de vinhos tintos: ", tinto, " Porcentagem em estoque: ", porcT, "\n")
			escreva("Quantidade de vinhos branco: ", branco, " Porcentagem em estoque: ", porcB, "\n")
			escreva("Quantidade de vinhos rose: ", rose, " Porcentagem em estoque: ", porcR, "\n")
		}
		senao{
			escreva("Não houve acréscimos no estoque")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1014; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */