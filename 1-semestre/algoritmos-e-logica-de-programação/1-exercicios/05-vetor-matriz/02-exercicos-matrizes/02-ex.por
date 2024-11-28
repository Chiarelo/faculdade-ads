programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro matriz[5][5], i, j, col[5]
		
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				matriz[i][j] = u.sorteia(1, 20)
			}
		}

		para(i=0;i<5;i++){
			col[i] = matriz[i][4-i]
		}

		escreva("Matriz: \n")
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				escreva(matriz[i][j], " ")
			}
			escreva("\n")
		}


		escreva("\nColuna secundaria: \n")
		// Imprimindo a coluna secundária
        para(i = 0; i < 5; i++) {
            escreva(col[i] + " ")
        }

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 390; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 7, 10, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */