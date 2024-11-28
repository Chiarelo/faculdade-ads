programa
{
    funcao inicio()
    {
        cadeia sexo, habilitacao
        inteiro idade

        escreva("O usuário deve utilizar letras maiúsculas para interagir com o sistema!\n")
        escreva("Informe o sexo do candidato: (F para Feminino e M para Masculino): ")
        leia(sexo)

        escreva("Informe a idade do candidato: ")
        leia(idade)

        se(sexo == "F" e idade > 21)
        {
            escreva("A candidata foi selecionada para a entrevista!!\n")
        }
        senao se(sexo == "M")
        {
            se(idade > 18)
            {
                escreva("Possui habilitação tipo AB? (SIM/NÃO): ")
                leia(habilitacao)

                se(habilitacao == "SIM")
                {
                    escreva("O candidato foi selecionado para a entrevista!!\n")
                }
                senao
                {
                    escreva("Candidato não selecionado!\n")
                }
            }
            senao
            {
                escreva("Candidato não selecionado!\n")
            }
        }
        senao
        {
            escreva("Candidato não selecionado!\n")
        }
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 556; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */