programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	

		inteiro vetor[20], pares[20], impares[20], i, nImp, nPar

		nPar = 0
		nImp = 0
		
		para(i=0;i<20;i++){
			vetor[i] = u.sorteia(1, 20)
		}

		para(i=0;i<20;i++){
			se(vetor[i] % 2 == 0){
				nPar = nPar + 1
				pares[i] = vetor[i]
			}
			senao{
				nImp = nImp + 1
				impares[i] = vetor[i]
			}
		}

		escreva("Vetor original: \n")
		para(i=0;i<20;i++){
			escreva(vetor[i], ", ")
		}
		escreva("\n")

		escreva("Vetor par: \n")
		para(i=0;i<20;i++){
			se(pares[i] != 0){
				escreva(pares[i], ", ")
			}
		}
		escreva("\n")

		escreva("Vetor impares: \n")
		para(i=0;i<20;i++){
			se(impares[i] != 0){
				escreva(vetor[i], ", ")
			}
		}
		escreva("\n")

		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 731; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */