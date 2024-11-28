programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
	
		inteiro matriz[3][4], i, j, col[5], somaCol[5], somaLin[5], somaImp
		somaImp = 0
		
		para(i=0;i<3;i++){
			para(j=0;j<4;j++){
				matriz[i][j] = u.sorteia(1, 20)
			}
		}

		para(i=0;i<3;i++){
			para(j=0;j<4;j++){
				se(matriz[i][j] % 2 == 1){
					somaImp = somaImp + matriz[i][j]
				}
			}
		}

		para(i=0;i<3;i++){
			para(j=0;j<4;j++){
				somaCol[j] = somaCol[j] + matriz[i][j]
			}
		}

		para(i=0;i<3;i++){
			para(j=0;j<4;j++){
				somaLin[i] = somaLin[i] + matriz[i][j]
			}
		}

		limpa()
		escreva("Soma dos números ímpares: ", somaImp, "\n")
		escreva("Soma das colunas: ")
			para(j=0;j<4;j++){
				escreva(somaCol[j], " ")
			}

		escreva("\nSoma das linhas: ")
		para(i=0;i<3;i++){
			escreva(somaLin[i], " ")
		}
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 815; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 8, 10, 6}-{somaCol, 8, 38, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */