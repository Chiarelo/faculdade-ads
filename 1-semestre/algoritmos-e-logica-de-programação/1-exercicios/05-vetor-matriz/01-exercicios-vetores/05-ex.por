programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{	
		inteiro vet[20], maior, menor,i

		//Sorteando os números do vetor
		para(i =0;i<20;i++){
			vet[i] = u.sorteia(1, 40)
		}

		maior = vet[0]
		para(i=0;i<20;i++){
			se(vet[i] > maior){
				maior = vet[i]
			}
		}

		menor = vet[0]
		para(i=0;i<20;i++){
			se(vet[i] < menor){
				menor = vet[i]
			}
		}

		para(i=0;i<20;i++){
			se(i < 19){
			escreva(vet[i], ", ")
			}
			senao{
				escreva(vet[i])
			}
		}

		escreva("\nO maior número inserido no vetor foi: ", maior)
		escreva("\nO menor número inserido no vetor foi: ", menor)


		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 605; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {vet, 7, 10, 3}-{maior, 7, 19, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */