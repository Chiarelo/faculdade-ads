import Styles from "@/app/components/styles/card.module.css";
export default function card({ nome, imagem, preco, estoque }){
    const pasteis = [
        { id: 1, nome: "Pastel de Queijo", preco: 10.00, imagem: "/images/cesta-pasteis.png", estoque: true },
        { id: 2, nome: "Pastel de Carne", preco: 11.00, imagem: "/images/pastel-carne.jpeg", estoque: true },
        { id: 3, nome: "Pastel de Frango", preco: 12.00, imagem: "/images/cesta-pasteis.png", estoque: false },
        { id: 4, nome: "Pastel de Pizza", preco: 13.00, imagem: "/images/cesta-pasteis.png", estoque: true },
        { id: 5, nome: "Pastel de Palmito", preco: 12.50, imagem: "/images/cesta-pasteis.png", estoque: true },
        { id: 6, nome: "Pastel de Camarão", preco: 15.00, imagem: "/images/cesta-pasteis.png", estoque: true },
        { id: 7, nome: "Pastel de Calabresa", preco: 11.50, imagem: "/images/cesta-pasteis.png", estoque: false },
        { id: 8, nome: "Pastel de Chocolate", preco: 13.50, imagem: "/images/cesta-pasteis.png", estoque: false },
        { id: 9, nome: "Pastel de Doce de Leite", preco: 12.00, imagem: "/images/cesta-pasteis.png", estoque: true },
        { id: 10, nome: "Pastel de Banana com Canela", preco: 10.50, imagem: "/images/cesta-pasteis.png", estoque: true }
    ];
    const cardClass = estoque ? Styles.card : `${Styles.card} ${Styles.outOfStock}`;

    return (
        <div className={cardClass}>
            <h2>{nome}</h2>
            <img src={imagem}  alt="" />
            <p>R${preco}</p>
        </div>
    )


}