import Styles from "@/app/components/styles/header.module.css";
export default function header(props){
    return (
        <div className={Styles.header}>
            <h1>Pastelaria do Léo</h1>
            <img src="/images/pastel.png" alt="" />
        </div>
    )
}
