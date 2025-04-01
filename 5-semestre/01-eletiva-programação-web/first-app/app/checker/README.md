# Tabuleiro de Damas

<h1 align="center">
  <img alt="Logo" src="" width="350px">
</h1>

<p align="center">
  Este projeto apresenta um Tabuleiro de Damas responsivo e estilizado, implementado com Next.js e CSS Modules.
  Ele exibe as peças corretamente posicionadas, sem interatividade, mas com efeitos visuais diferenciados. <br><br>
</p>

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como Rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estilizacao">Estilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licenca">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=0F172A&labelColor=1D4ED8">
</p>

---

## 📂 Projeto

### 💻 Para PC:
<p align="center">
  <img alt="Projeto para PC" src="https://github.com/user-attachments/assets/8607a2b2-4e64-4054-8337-776ddf9ad3ca" width="800px">
</p>

### 📱 Para Celular:
<p align="center">
  <img alt="Projeto para Celular" src="https://github.com/user-attachments/assets/0c4c4c05-f339-4449-85ae-8e5db6b76901" width="300px">
</p>

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido utilizando:

- ⚡ **Next.js** - Framework React para aplicações web rápidas.
- 🎨 **CSS Modules** - Modularização dos estilos.

---

## ▶️ Como Rodar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   cd primeiro-app/
   npm run dev
   ```

4. **Acesse o projeto**:
   Abra o navegador e acesse `http://localhost:3000/checker` para visualizar o tabuleiro de damas.

---

## 📂 Estrutura do Projeto

- **`/app/checker/components/board.js`**: Contém a lógica para gerar o tabuleiro e as peças.
- **`/app/checker/components/style.module.css`**: Contém a estilização do tabuleiro e das peças.
- **`/app/checker/page.js`**: Componente principal que renderiza o tabuleiro e o título.

---

## 🎨 Estilização

A estilização do projeto foi feita utilizando CSS Modules, o que permite encapsular os estilos e evitar conflitos.
Abaixo estão os principais pontos da estilização:

### 🏁 Tabuleiro
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

### ⚫⚪ Células
- **`.cellBlack`** e **`.cellWhite`**: Define as cores das células do tabuleiro.
  ```css
  .cellBlack {
      background-color: #39393A;
  }

  .cellWhite {
      background-color: #fff;
  }
  ```

### 🔴🔵 Peças
- **`.pieceTop`** e **`.pieceBottom`**: Estiliza as peças superiores e inferiores.
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

### 📱 Responsividade
- **Media Queries**: Ajusta o tamanho do tabuleiro e das peças para telas menores.
  ```css
  @media (max-width: 48em) {
      .grid {
          grid-template-columns: repeat(8, 30px);
          grid-template-rows: repeat(8, 30px);
      }

      .pieceTop, .pieceBottom {
          width: 15px;
          height: 15px;
      }
  }
  ```

---


## 📝 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

<p align="center">
  <img alt="Next.js" src="https://github.com/user-attachments/assets/fa6ab436-ae1b-41e0-b26c-2af8f4d8c2a6" width="120px" />
</p>
