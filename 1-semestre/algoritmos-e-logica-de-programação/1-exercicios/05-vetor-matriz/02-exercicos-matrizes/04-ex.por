programa
{
    inclua biblioteca Util --> u
    
    funcao inicio()
    {
        inteiro matriz[5][5], i, j
        inteiro troca[5]
        
     
        para(i = 0; i < 5; i++) {    
            para(j = 0; j < 5; j++) {
                matriz[i][j] = u.sorteia(1, 20)
            }
        }

        
        para(i = 0; i < 5; i++) {
            para(j = 0; j < 5; j++) {
                escreva(matriz[i][j], " ")        
            }
            escreva("\n")
        }

        escreva("\n\n")

        // Armazenar a segunda linha na variável 'troca'
        para(j = 0; j < 5; j++) {
            troca[j] = matriz[1][j]
        }   
        
        // Substituir a segunda linha pela quarta linha
        para(j = 0; j < 5; j++) {
            matriz[1][j] = matriz[3][j]
        }

        // Substituir a quarta linha pela linha armazenada em 'troca'
        para(j = 0; j < 5; j++) {
            matriz[3][j] = troca[j]
        }

    
        para(i = 0; i < 5; i++) {
            para(j = 0; j < 5; j++) {
                escreva(matriz[i][j], " ")        
            }
            escreva("\n")
        }
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 952; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {matriz, 7, 16, 6}-{troca, 8, 16, 5};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */