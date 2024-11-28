programa
{
	
	funcao inicio()
	{
		inteiro i, impares

		impares = 0
		
		para(i = 1; i<=500; i++){
			se((i % 2 == 1) e (i % 3 == 0)){
				impares = impares + i
			}
		}
		escreva("A soma total de todos os números ÍMPARES de 1 a 500: ", impares)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 258; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */