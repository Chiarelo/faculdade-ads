programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro vet[30], vet2[30], i

		para(i=0;i<30;i++){
			vet[i] = u.sorteia(1, 30)
		}

		para(i=0;i<30;i++){
			se(i % 2 == 0){
				vet2[i] = vet[i] * 2 
			}
			senao {
				vet2[i] = vet[i] * 3 
			}
		}

		escreva("Primeiro vetor: \n")
		para(i=0;i<30;i++){
			se(i < 29){
				escreva(vet[i], ", ")
			}
			senao{
				escreva(vet[i])
			}
		}

		escreva("\n\n\n")
		escreva("Novo vetor: \n")

		para(i=0;i<30;i++){
			se(i < 29){
				escreva(vet2[i], ", ")
			}
			senao{
				escreva(vet2[i])
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 184; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet, 7, 10, 3}-{vet2, 7, 19, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */