import Card from "../../app/components/card";
import Styles from "../../app/components/styles/main.module.css";

export default function main(props){
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
    return (
        <div>
            <div className={Styles.grid}>
                {pasteis.map((pastel) =>
                 <Card key={pastel.id}
                       nome={pastel.nome}
                       imagem={pastel.imagem}
                       preco={pastel.preco.toFixed(2)}
                       estoque={pastel.estoque}
                 ></Card>
                )}

            </div>
        </div>
    )
}
