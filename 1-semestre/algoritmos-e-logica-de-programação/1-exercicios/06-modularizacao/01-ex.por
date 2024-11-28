programa
{
	
	funcao inicio()
	{	
		inteiro a, b
		faca{
			escreva("Divisões por 0 não são possiveis")
			escreva("Digite o primeiro valor: ")
			leia(a)
			escreva("Digite o segundo valor: ")
			leia(b)
	
		} enquanto(a == 0 ou b == 0)
		
		escreva(quociente(a,b))
		
	}

	funcao inteiro quociente(inteiro dividendo, inteiro divisor){
		inteiro quoc = 0
		se(dividendo < divisor){
			enquanto(divisor >= dividendo){
				divisor -= dividendo
				quoc += 1
			}
			retorne quoc
		}
		senao{
			enquanto(dividendo >= divisor){
				dividendo -= divisor
				quoc += 1
			}
			retorne quoc
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 602; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */