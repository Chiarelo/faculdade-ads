import xlsx from "npm:xlsx@0.18.5";
import fs from 'node:fs';

class Analisador {
  constructor(caminho_da_planilha: string) {
    this.pasta_de_trabalho = xlsx.readFile(caminho_da_planilha);
    this.nome_da_planilha_principal = this.pasta_de_trabalho.SheetNames[0];
    this.planilha_principal = this.pasta_de_trabalho.Sheets[this.nome_da_planilha_principal];
    this.lista_de_dados = xlsx.utils.sheet_to_json(this.planilha_principal);

    this.contagem_de_categorias = {
      "Carreira (pessoas que querem garantir um emprego/carreira na área)": 0,
      "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)": 0,
      "Finanças (pessoas que buscam uma vida financeira estável com o curso)": 0,
      "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)": 0
    }

    this.contagem_de_palavras = {}

    this.contagem_de_perguntas_e_respostas = {}
  }

  public tratar_dados() {
    for (const dado_bruto of this.lista_de_dados) {
      for (const pergunta_bruta in dado_bruto) {
        const resposta_da_pergunta = String(dado_bruto[pergunta_bruta]);
        const elementos_da_lista = resposta_da_pergunta.match(Analisador.EXPRESSÃO_DE_LISTAS)?.map((item) => item.slice(0, -1));

        const estáDuplicada = pergunta_bruta.match(Analisador.EXPRESSÃO_DE_DUPLICADOS);

        if (estáDuplicada) {
          this.unir_pergunta_duplicada(pergunta_bruta, dado_bruto);
        }

        if (pergunta_bruta === "Escreva algumas linhas sobre sua história e seus sonhos de vida.") {
          const palavras_da_resposta = resposta_da_pergunta.toLowerCase().match(Analisador.EXPRESSÃO_DE_PALAVRAS) || [];

          palavras_da_resposta.forEach((palavra) => {
            const categoria_da_palavra = Analisador.PALAVRAS_CHAVE[palavra];

            if (categoria_da_palavra) {
              if (!this.contagem_de_categorias[categoria_da_palavra]) this.contagem_de_categorias[categoria_da_palavra] = 0;
              if (!this.contagem_de_palavras[categoria_da_palavra]) this.contagem_de_palavras[categoria_da_palavra] = 0;

              this.contagem_de_categorias[categoria_da_palavra]++;
              this.contagem_de_palavras[categoria_da_palavra]++;
            }
          });
        }

        if (pergunta_bruta === "Qual empresa que você está contratado agora?") {
          const palavras_da_resposta_sem_paradas = this.remover_paradas(resposta_da_pergunta);

          palavras_da_resposta_sem_paradas.forEach((palavra) => {
            if (!this.contagem_de_palavras[palavra]) this.contagem_de_palavras[palavra] = 0;
            
            this.contagem_de_palavras[palavra]++;
          });
        }

        if (!estáDuplicada) {
          const pergunta_contada = this.contagem_de_perguntas_e_respostas[pergunta_bruta];
          if (!pergunta_contada) this.contagem_de_perguntas_e_respostas[pergunta_bruta] = {};

          if (elementos_da_lista) {
            elementos_da_lista.forEach((elemento) => {
              const resposta_contada = this.contagem_de_perguntas_e_respostas[pergunta_bruta][elemento];
              if (!resposta_contada) this.contagem_de_perguntas_e_respostas[pergunta_bruta][elemento] = 0;

              this.contagem_de_perguntas_e_respostas[pergunta_bruta][elemento]++;
            });
          } else {
            const resposta_contada = this.contagem_de_perguntas_e_respostas[pergunta_bruta][resposta_da_pergunta];
            if (!resposta_contada) this.contagem_de_perguntas_e_respostas[pergunta_bruta][resposta_da_pergunta] = 0;

            this.contagem_de_perguntas_e_respostas[pergunta_bruta][resposta_da_pergunta]++;
          }
        }
      }

      this.contagem_de_perguntas_e_respostas[Analisador.PERGUNTA_PARA_CATEGORIAS] = {}

      for (const categoria in this.contagem_de_categorias) {
        this.contagem_de_perguntas_e_respostas[Analisador.PERGUNTA_PARA_CATEGORIAS][categoria] = this.contagem_de_categorias[categoria];
      }

      for (const pergunta in this.contagem_de_perguntas_e_respostas) {
        if (pergunta.startsWith("V+AZ:CPocê usa microcomputadores?")) {
          this.contagem_de_perguntas_e_respostas["Você usa microcomputadores?"] = this.contagem_de_perguntas_e_respostas[pergunta];
          delete this.contagem_de_perguntas_e_respostas[pergunta];
        }
      }
    }
  }

  public renderizar_gráficos() {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
          <style>
            * {
              margin: 0;
              border: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              display: flex;
              flex-direction: column;
            }

            #gráficos {
              width: 100vw;
              height: 100vh;
              gap: 10vw;

              display: flex;
              flex-direction: row;
            }
          </style>
        </head>
        <body>
          <div id="gráficos"></div>
        </body>
        <script>
          const contagem_de_perguntas_e_respostas = ${JSON.stringify(this.contagem_de_perguntas_e_respostas)};
      
          for (const pergunta in contagem_de_perguntas_e_respostas) {
            const respostas = [];
            const contagem = [];
      
            for (const resposta in contagem_de_perguntas_e_respostas[pergunta]) {
              respostas.push(resposta);
              contagem.push(contagem_de_perguntas_e_respostas[pergunta][resposta]);
            }

            if (contagem.reduce((acumulador, elemento) => acumulador + elemento, 0) === contagem.length) {
              continue;
            }
      
            const canvas = document.createElement('canvas');

            document.querySelector("#gráficos").append(canvas);
      
            const contexto = canvas.getContext('2d');
            
            const gráfico = new Chart(contexto, {
              type: 'pie',
              data: {
                labels: respostas,
                datasets: [{
                  data: contagem
                }]
              },
              options: {
                plugins: {
                  title: {
                    display: true,
                    text: pergunta,
                    font: {
                      size: 75
                    }
                  },
                  legend: {
                    display: true,
                    position: 'top',
                    labels: {
                      font: {
                        size: 16
                      }
                    }
                  },
                  locale: 'pt-br'
                }
              }
            });
          }
        </script>
      </html>
    `;

    fs.writeFileSync('gráficos.html', html);
  }

  public exibir_análise() {
    console.log("Contagem global de palavras:", this.contagem_de_palavras);

    for (const categoria in this.contagem_de_categorias) {
      console.log(`Total de palavras-chave na categoria ${categoria}: ${this.contagem_de_categorias[categoria]}`);
    }

    console.log("Contagem das perguntas e respostas:", this.contagem_de_perguntas_e_respostas);
  }
  
  private unir_pergunta_duplicada(pergunta_bruta: string, dado_bruto: Dado_Bruto) {
    const perguntaCompleta = pergunta_bruta.replace(Analisador.EXPRESSÃO_DE_DUPLICADOS, "");
    if (dado_bruto[pergunta_bruta]) dado_bruto[perguntaCompleta] = dado_bruto[pergunta_bruta];
  }

  private remover_paradas(resposta: string) {
    const palavras = resposta.toLowerCase().match(Analisador.EXPRESSÃO_DE_PALAVRAS) || [];
    const palavras_sem_paradas: Array<string> = [];

    palavras.forEach((palavra) => {
      if (!Analisador.PARADAS.includes(palavra)) palavras_sem_paradas.push(palavra);
    });
  
    return palavras_sem_paradas;
  }

  pasta_de_trabalho: xlsx.WorkBook;
  nome_da_planilha_principal: string;
  planilha_principal: xlsx.WorkSheet;
  lista_de_dados: Array<Dado_Bruto>;

  contagem_de_categorias: Contagem_de_Palavras;
  contagem_de_palavras: Contagem_de_Palavras;

  contagem_de_perguntas_e_respostas: Contagem_de_Perguntas_e_Respostas;

  public static EXPRESSÃO_DE_DUPLICADOS = /\d+$/g;
  public static EXPRESSÃO_DE_PALAVRAS = /\S+/g;
  public static EXPRESSÃO_DE_LISTAS = /([^;\s]+);/g;

  public static PALAVRAS_CHAVE: Palavras_Chave = {
    "trabalho": "Carreira (pessoas que querem garantir um emprego/carreira na área)",
    "emprego": "Carreira (pessoas que querem garantir um emprego/carreira na área)",
    "profissionalizar": "Carreira (pessoas que querem garantir um emprego/carreira na área)",
    "trabalhar": "Carreira (pessoas que querem garantir um emprego/carreira na área)",
    "área": "Carreira (pessoas que querem garantir um emprego/carreira na área)",
    "conhecimento": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "formar": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "graduar": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "graduado": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "especializar": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "especialização": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "estudar": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "curso": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "diploma": "Educação (pessoas que querem buscar conhecimento/ou a conclusão do curso)",
    "família": "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)",
    "mãe": "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)",
    "pai": "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)",
    "amigos": "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)",
    "intercâmbio": "Relações Pessoais (pessoas que começaram a estudar na área por amigos ou parentes e que querem sustentá-los)",
    "estabilidade": "Finanças (pessoas que buscam uma vida financeira estável com o curso)",
    "dinheiro": "Finanças (pessoas que buscam uma vida financeira estável com o curso)",
    "sustentar": "Finanças (pessoas que buscam uma vida financeira estável com o curso)",
  };

  public static PARADAS = ["a", "o", "em", "de", "para", "com", "que", "você", "está"];

  //public static PERGUNTA_PARA_CATEGORIAS = "Distribuição de alunos que responderam o questionário do perfil socioeconômico";
}

type Dado_Bruto = {
  [chave: string]: string | number
}

type Contagem_de_Palavras = {
  [chave: string]: number;
};

type Palavras_Chave = {
  [chave: string]: string
}

type Contagem_de_Perguntas_e_Respostas = {
  [pergunta: string]: {
    [resposta: string]: number
  }
}

function programa(): void {
  const analisador = new Analisador("Perfil.xlsx");

  analisador.tratar_dados();
  analisador.exibir_análise();
  analisador.renderizar_gráficos();
}

programa();