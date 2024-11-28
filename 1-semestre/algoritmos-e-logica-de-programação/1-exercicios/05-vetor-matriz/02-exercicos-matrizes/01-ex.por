programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro vetor[5][5], i, j

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				vetor[i][j] = u.sorteia(1, 20)
			}
		}
		
		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				escreva(vetor[i][j], " ")
			}
			escreva("\n")
		}	

		escreva("Diagonal principal: \n")

		para(i=0;i<5;i++){
			para(j=0;j<5;j++){
				se(i == j){
					escreva(vetor[i][j], " ")
				}
				
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
 * @POSICAO-CURSOR = 321; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vetor, 7, 10, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */