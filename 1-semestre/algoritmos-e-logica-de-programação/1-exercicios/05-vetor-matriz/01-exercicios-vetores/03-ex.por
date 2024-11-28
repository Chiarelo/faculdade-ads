programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro vet[100], vet2[100], i

		para(i=0;i<100; i++){
			vet[i] = u.sorteia(1, 100)
		}

		escreva("Vetor sorteado: \n")
		para(i=0;i<100; i++){
			escreva(vet[i], ", ")
		}
	

		para(i=0;i<100;i++){
			se(vet[i] % 2 == 0){
				vet[i] = 1
			}
			senao{
				vet[i] = 0
			}
		}

		escreva("Vetor preenchido: \n")
		para(i=0;i<100;i++){
			escreva(vet[i], ", ")
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 443; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */