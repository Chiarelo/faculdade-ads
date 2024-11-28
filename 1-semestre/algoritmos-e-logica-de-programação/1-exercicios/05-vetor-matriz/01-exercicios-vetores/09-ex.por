programa
{
	inclua biblioteca Util --> u
	
	funcao inicio()
	{
		inteiro i, qntdAcima, qntdAbaixo
		real nota[50], soma, mediaA, percAcima, percAbaixo

		qntdAcima =0
		qntdAbaixo = 0
		soma = 0.0
		
		para(i=0;i<50;i++){
			escreva("Digite a ", i+1, "º nota: ")
			faca{
				leia(nota[i])
				se(nota[i] < 0 ou nota[i] > 10){
					escreva("Nota inválida! Insira um valor entre 0 e 10.")
				}
			} enquanto(nota[i] > 10 ou nota[i] < 0)
			soma += nota[i]
		}

		mediaA = (soma/50.0)

		percAcima =  (mediaA * 1.10) 
		percAbaixo =  (mediaA * 0.90) 

		para(i=0;i<50;i++){
			se(nota[i] > percAcima){
				qntdAcima += 1
			}
			senao se(nota[i] < percAbaixo){
				qntdAbaixo += 1
			}
		}

		limpa()
		escreva("Vetor com as notas: \n")
		para(i=0;i<50;i++){
			se(i<49){
				escreva(nota[i], ", ")
			}
			senao{
				escreva(nota[i])
			}
		}

		escreva("\n\nMédia Aritmética da turma: ", mediaA)
		escreva("\nPercentual limite de 10% acima: ", percAcima)
		escreva("\nPercentual limite de 10% abaixo: ", percAbaixo)
		escreva("\nQuantidade de notas 10% acima da média: ", qntdAcima)
		escreva("\nQuantidade de notas 10% abaixo da média: ", qntdAbaixo)
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 459; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {nota, 8, 7, 4};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */