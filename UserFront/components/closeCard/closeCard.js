import { agregarEstilo } from "../../utils/agregarEstilos.js";
import closeCard from "./closeCardComponent.js";

async function pintarCloseCard() {

    agregarEstilo("/components/closeCard/closeCard.css");
    let menuContainer = document.getElementById("menu-opciones-container");

    menuContainer.innerHTML += closeCard();
};


export const closeTarjeta = {
    pintarCloseCard : pintarCloseCard
}