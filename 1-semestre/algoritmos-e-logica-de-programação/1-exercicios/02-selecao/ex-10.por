programa
{
	
	funcao inicio()
	{	
		inteiro lado1, lado2, lado3
		escreva("Primeiro segmento do triângulo: ")
		leia(lado1)
		escreva("Segundo segmento do triângulo: ")
		leia(lado2)
		escreva("Terceiro segmento do triângulo: ")
		leia(lado3)
		limpa()

		se(lado1 + lado2 <= lado3 ou lado2 + lado3 <= lado1 ou lado1 + lado3 <= lado2){
			escreva("não é possivel formar um triângulo")
		}senao{
			escreva("É possivel formar um triangulo")
			se(lado1 == lado2 e lado1 == lado3){
				escreva("\nO triângulo é equilátero!!")
			}senao
			se(lado1 != lado2 e lado2 != lado3 e lado3 != lado1){
				escreva("\nTriangulo escaleno")
			}
			senao{
				escreva("\nO triangulo é Isosceles")
			}
		}
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 257; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */