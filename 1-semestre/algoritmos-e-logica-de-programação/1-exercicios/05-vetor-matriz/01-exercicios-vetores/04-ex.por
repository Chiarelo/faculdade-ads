programa
{
	
	funcao inicio()
	{	
		inteiro prim, seg, tot, vet[30], i
		prim = 0
		seg = 1
		escreva("Sequencia de fibonacci: \n")


		vet[0] = prim
        	vet[1] = seg
		para(i=2;i<30;i++){
			vet[i] = prim + seg
			prim = seg
			seg = vet[i]
		}

		para(i=0;i<30;i++){
			se(i < 29){
			escreva(vet[i], ", ")
			}
			senao{
				escreva(vet[i])
			}
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 363; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */