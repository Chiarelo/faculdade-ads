import Styles from "@/app/checker/components/style.module.css";

const size = 8;
const pieces = () => ({
     whitePiece: () => ( <div className={`${Styles.pieceTop}`}></div> ),
     blackPiece: () => ( <div className={Styles.pieceBottom}></div> )
});

const board = () => {
    const house = () => {
        return Array.from({ length: size }, (_, row) => {
            return Array.from({ length: size}, (_, column) => {
                let blackHouse = (row + column) % 2 === 1;
                let piece = null;
                if(blackHouse) {
                    if (row < 3) piece =  pieces().whitePiece();
                    else if (row > 4) piece = pieces().blackPiece();
                }

                return {piece, isBlack: blackHouse}
            })
        })
    }
    return house();
}

// a função de renderização sempre tem que ter o export default function pois é a função principal
export default function generateBoard(){
    const boardData = board();
    return (
        <div className={Styles.grid}>
            {boardData.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <div className={`${Styles.cell} ${cell.isBlack ? Styles.cellBlack : Styles.cellWhite}`} key={`${rowIndex} - ${colIndex}`}>
                        {cell.piece}
                    </div>
                ))
            ))}
        </div>
    )
}


