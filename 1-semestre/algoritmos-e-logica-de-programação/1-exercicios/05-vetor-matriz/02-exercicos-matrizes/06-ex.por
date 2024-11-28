programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro matriz[5][5], i, j, trocaL[5], trocaC[5], trocaD[5], diagSec[5]

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				matriz[i][j] = u.sorteia(1, 30)
			}
		}

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				escreva(matriz[i][j], " ")
			}
			escreva("\n")
		}

		//trocar linhas
		para(j=0;j<5;j++){
			trocaL[j] = matriz[1][j]
		}

		para(j=0;j<5;j++){
			matriz[1][j] = matriz[4][j]
		}

		para(j=0;j<5;j++){
			matriz[4][j] = trocaL[j]
		}
		escreva("\n\n")

		//Trocar colunas

		para(i=0;i<5;i++){
			trocaC[i] = matriz[i][0]
		}

		para(i=0;i<5;i++){
			matriz[i][0] = matriz[i][4]
		}

		para(i=0;i<5;i++){
			matriz[i][4] = trocaC[i]
		}

		//Trocar diagonais
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				se(i == j){
					trocaD[i] = matriz[i][j]	
				}
			}
		}

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				diagSec[i] = matriz[i][4-i]
			}
		}

		 para(i = 0; i < 5; i++) {
            matriz[i][i] = diagSec[i]
     	 }
	

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				matriz[i][4-i] = trocaD[i]
			}
		}

		

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				escreva(matriz[i][j], " ")
			}
			escreva("\n")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 716; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 7, 10, 6}-{trocaL, 7, 30, 6}-{trocaC, 7, 41, 6}-{trocaD, 7, 52, 6}-{diagSec, 7, 63, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */