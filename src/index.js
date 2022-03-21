import reactDOM from "react-dom";
import HomePage from "./componentes/HomePage";
import DeckPage from "./componentes/DeckPage"
import React from "react";
import "./../src/estilos/reset.css"
import "./../src/estilos/style.css"

function App() {
    const [screenSelected, setScreenSelected] = React.useState(true);
    return screenSelected === true ? 
    (
        <HomePage onclick = {(changeScreen) => setScreenSelected(changeScreen)}/>
    ) : (
        <DeckPage />
    )
}

const root = document.querySelector(".root");

reactDOM.render(<App />, root);