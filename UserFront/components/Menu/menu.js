import { Menu } from "../../API/Menu/Menu.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
import pintarMenu from "./menuComponent.js";

const divMenu = document.getElementById("menu-container");

async function getMenu(){

    const response = await fetch('/components/Menu/menu.html');
    const menuData = await Menu.GetSiguiente();
    
    const menu = pintarMenu(menuData);
    divMenu.innerHTML = menu;

    agregarEstilo('/components/Menu/menu.css');
};

export const MenuComponent = {
    menuComponente : getMenu
}