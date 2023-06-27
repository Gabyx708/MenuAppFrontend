import { agregarEstilo } from "../../utils/agregarEstilos.js";

const headerTag = document.getElementsByTagName("header")[0];

async function getHeader(){

    const response = await fetch('/components/header/header.html');
    const header = await response.text();
    headerTag.innerHTML += header;

    agregarEstilo('/components/header/header.css');

};

export const HeaderComponent = {
    header : getHeader
}