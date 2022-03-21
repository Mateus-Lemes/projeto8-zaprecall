import Logo from "./../imagens/logo.png";

export default function HomePage(props) {
    return (
        <div className = "home">
            <img src={Logo} alt="" />
            <h1>ZapRecall</h1>
            <button onClick={() => props.onclick(false)}>Iniciar Recall!</button>
        </div>
    )
}