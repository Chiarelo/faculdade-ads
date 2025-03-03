# Tabuleiro de Damas
Este projeto é uma implementação de um tabuleiro de damas utilizando Next.js e CSS modules. O tabuleiro é renderizado dinamicamente e possui estilização responsiva para diferentes tamanhos de tela.

## Como Rodar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

   ### 🔹 *Comandos para Executar o Projeto*

3. **Para rodar o projeto, execute os comandos abaixo em sequência:**:

   ```bash
   cd primeiro-app/
   npm run start
   npm run build
   npm run dev
   ```

4. **Acesse o projeto**:
   Abra o navegador e acesse `http://localhost:3000/checker` para visualizar o tabuleiro de damas.

## Estrutura do Projeto

- **`/app/checker/components/board.js`**: Contém a lógica para gerar o tabuleiro e as peças.
- **`/app/checker/components/style.module.css`**: Contém a estilização do tabuleiro e das peças.
- **`/app/checker/page.js`**: Componente principal que renderiza o tabuleiro e o título.

## Estilização

A estilização do projeto foi feita utilizando CSS Modules, o que permite encapsular os estilos e evitar conflitos. Abaixo estão os principais pontos da estilização:


### Tabuleiro
- **`.grid`**: Define o layout do tabuleiro como uma grade 8x8.
  ```css
  .grid {
      display: grid;
      grid-template-columns: repeat(8, 50px);
      grid-template-rows: repeat(8, 50px);
      gap: 0;
      border: 10px solid #34b710;
      width: fit-content;
  }
  ```

### Células
- **`.cellBlack`** e **`.cellWhite`**: Define as cores das células do tabuleiro.
  ```css
  .cellBlack {
      background-color: #39393A;
  }

  .cellWhite {
      background-color: #fff;
  }
  ```

### Peças
- **`.pieceTop`** e **`.pieceBottom`**: Estiliza as peças brancas e pretas, respectivamente.
  ```css
  .pieceTop {
      justify-self: center;
      display: flex;
      background-color: #08BDBD;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      outline: 1px solid black;
  }

  .pieceBottom {
      display: flex;
      background-color: #B80C09;
      width: 25px;
      height: 25px;
      border-radius: 999px;
      justify-self: center;
      outline: 1px solid black;
      transition: all 0.3s ease;
  }
  ```

### Responsividade
- **Media Queries**: Ajusta o tamanho do tabuleiro e das peças para telas menores.
  ```css
  @media (width <= 48em) {
      .grid {
          grid-template-columns: repeat(8, 30px);
          grid-template-rows: repeat(8, 30px);
      }

      .pieceTop {
          width: 15px;
          height: 15px;
      }
      .pieceBottom {
          width: 15px;
          height: 15px;
      }
  }
  ```

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
```
