programa
{
	funcao inicio()
	{
		inteiro i, j
		escreva("CONTAGEM REGRESSIVA\n")
		
		para(i = 10; i >= 0; i--)
		{
			se(i == 10)
			{
				escreva(i, ":00\n")
			}
			senao
			{
				para(j = 59; j >= 0; j--)
				{
					se(j < 10)
					{
						escreva(i, ":0", j, "\n")
					}
					senao
					{
						escreva(i, ":", j, "\n")
					}
				}
			}
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 332; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */