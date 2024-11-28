programa
{
    inclua biblioteca Texto --> txt

    funcao inicio()
    {
        inteiro i, contSim, contNao
        real porcM, porcF, masc, femi, respN, respS
        cadeia sexo, resposta

        respN = 0.0
        respS = 0.0
        masc = 0.0
        femi = 0.0
        contNao = 0
        contSim = 0
        i = 1
        
        enquanto(i <= 4)
        {
            escreva("Informe o sexo do usúario (M para Masculino e F para feminino): ")
            leia(sexo)
            sexo = txt.caixa_alta(sexo)
            
            // Verificação de entrada para sexo
            enquanto(sexo != "M" e sexo != "F")
            {
                escreva("Informe dados válidos!! ")
                leia(sexo)
                sexo = txt.caixa_alta(sexo)
            }
            
            escreva("Informe a opinião do produto com S (sim) ou N (não): ")
            leia(resposta)
            resposta = txt.caixa_alta(resposta)
            
            // Verificação de entrada para resposta
            enquanto(resposta != "S" e resposta != "N")
            {
                escreva("Informe dados válidos!\n")
                leia(resposta)
                resposta = txt.caixa_alta(resposta)
            }

            // Contagem de pessoas que responderam sim ou não
            se(resposta == "S")
            {
                contSim = contSim + 1
            }
            senao
            {
                contNao = contNao + 1
            }

            // Contagem de homens e mulheres
            se(sexo == "M")
            {
                masc = masc + 1
                se(resposta == "N")
                {
                    respN = respN + 1
                }
            }
            senao
            {
                femi = femi + 1
                se(resposta == "S")
                {
                    respS = respS + 1
                }
            }
            i = i + 1
        }

        // Cálculo correto das porcentagens
        se(masc > 0)
        {
            porcM = (respN / masc) * 100.0
        }
        senao
        {
            porcM = 0
        }

        se(femi > 0)
        {
            porcF = (respS / femi) * 100.0
        }
        senao
        {
            porcF = 0
        }

        limpa()
        escreva("O número de mulheres: ", femi, "\n")
        escreva("O número de mulheres que responderam sim: ", respS, "\n")
        escreva("A porcentagem de mulheres que responderam sim (em relação ao total de mulheres): ", porcF, "%\n")
        escreva("A porcentagem de homens que responderam não (em relação ao total de homens): ", porcM, "%\n")
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 289; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */