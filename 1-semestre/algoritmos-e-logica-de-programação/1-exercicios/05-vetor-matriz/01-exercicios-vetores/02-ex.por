programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro vet1[50], vet2[50], soma[50], i

		//Usando o biblioteca sorteia pra facilitar os testes!!
		para(i =0; i<=49; i++){
			vet1[i] = u.sorteia(1, 50)
		}

		para(i =0; i<=49; i++){
			vet2[i] = u.sorteia(1, 50)
		}

		para(i =0; i<=49; i++){
			soma[i] = vet1[i] + vet2[i] 
		}

		//Saida de dados!
		escreva("Primeiro vetor: \n")
		para(i =0; i<=49; i++){
			escreva(vet1[i], " ")
		}

		escreva("\n")

		escreva("Segundo vetor: \n")
		para(i =0; i<=49; i++){
			escreva(vet2[i], " ")
		}

		escreva("\n")

		escreva("Soma dos vetores: \n")
		para(i =0; i<=49; i++){
			escreva(soma[i], " ")
		}

		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 348; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet1, 7, 10, 4}-{vet2, 7, 20, 4}-{soma, 7, 30, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */