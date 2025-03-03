import Alele from "./css/style.module.css";
import Style from "@/app/style/components/style";

export default function EstiloPage() {
    return (
        <div>
            <h1 className={Alele.h1}>Aula Estilo</h1>
            <button className={Alele.button}>Clique Aqui 😍</button>
            <Style texto={"Vai chover!!!"} direita temp={30}></Style>
            <Style texto={"Vai chover!!!"} temp={18}></Style>
        </div>
    )
}