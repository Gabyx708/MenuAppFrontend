import { agregarEstilo } from "../../utils/agregarEstilos.js";

const divMenu = document.getElementById("menu-container");

async function getMenu(){

    const response = await fetch('/components/Menu/menu.html');
    const menu = await response.text();
    divMenu.innerHTML = menu;

    agregarEstilo('/components/Menu/menu.css');
};

export const MenuComponent = {
    menuComponente : getMenu
}