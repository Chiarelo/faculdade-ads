programa
{
	inclua biblioteca Util --> u
	
	
	funcao inicio()
	{
		inteiro vet[30], invert[30], i

		para(i=0;i<30;i++){
			vet[i] = u.sorteia(1, 30)
		}
		limpa()

		para(i=0; i<30;i++){
			invert[i] = vet[29-i]
		}

		para(i=0;i<30;i++){
			escreva(vet[i], ", ")
		}

		escreva("\n")

		para(i=0;i<30;i++){
			escreva(invert[i], ", ")
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 152; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet, 8, 10, 3}-{invert, 8, 19, 6};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */