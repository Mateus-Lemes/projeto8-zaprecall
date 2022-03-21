import Logo from "./../imagens/logo-pequeno.png"
export default function Header() {
    return (
        <header>
            <img src={Logo} alt="" />
            <h1>ZapRecall</h1>
        </header>
    )
}