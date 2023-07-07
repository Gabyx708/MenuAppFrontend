import { agregarEstilo } from "../../utils/agregarEstilos.js";

const bodyHtml = document.getElementsByClassName("container-principal")[0];

async function getNavBar(){

    const response = await fetch('/components/navBar/navBar.html');
    const nav = await response.text();
    bodyHtml.innerHTML += nav;
    
    agregarEstilo('/components/navBar/navBar.css');
};

export const navBar = {
    getNavbar : getNavBar
}