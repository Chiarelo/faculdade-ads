programa
{
	
	funcao inicio()
	{	
		inteiro cont
		real nota1, nota2, nota3, nota4, media
		
		cont = 1
		enquanto(cont <= 4){
			escreva(cont, "º aluno!\n")
			escreva("Informe a 1º nota: ")
			leia(nota1)
			escreva("Informe a 2º nota: ")
			leia(nota2)
			escreva("Informe a 3º nota: ")
			leia(nota3)
			escreva("Informe a 4º nota: ")
			leia(nota4)
			

			media = (nota1 + nota2 + nota3 + nota4) / 4
			escreva("Média: ", media)
			se(media >= 7){
				escreva("O aluno foi APROVADO!\n")
			}
			senao{
				escreva("O aluno foi REPROVADO\n")
			}
			cont += 1
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 549; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */