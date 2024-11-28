programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro matriz[10][10], i, j, maioresL[10], maioresC[10]

		para(i=0;i<10;i++){
			para(j=0;j<10;j++){
				matriz[i][j] = u.sorteia(1, 30)
			}
		}	

		para(i = 0; i < 10; i++) {
            maioresL[i] = matriz[i][0] 
        }

        para(j = 0; j < 10; j++) {
        	maioresC[j] = matriz[0][j]
        }

		//Maiores elementos de cada linha
		
		 para(i = 0; i < 10; i++) {
            para(j = 0; j < 10; j++) {
                se(matriz[i][j] > maioresL[i]) {
                    maioresL[i] = matriz[i][j]
                }
            }
        	}

        	para(i = 0; i < 10; i++) {
            para(j = 0; j < 10; j++) {
                se(matriz[i][j] > maioresC[j]) {
                    maioresC[j] = matriz[i][j]
                }
            }
        	}
			escreva("Maiores números de cada linha: \n")
			para(i=0;i<10;i++){
				escreva(maioresL[i], " ")
			}

			escreva("\nMaiores números de cada coluna: \n")
			para(j=0;j<10;j++){
				escreva(maioresC[j], " ")
			}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1062; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 7, 10, 6}-{maioresL, 7, 32, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */