import { agregarEstilo } from "../../utils/agregarEstilos.js";
import cerrarSesion from "../../utils/cerrarSesion.js";

const headerTag = document.getElementsByTagName("header")[0];

async function getHeader(){

    const response = await fetch('/components/header/header.html');
    const header = await response.text();
    headerTag.innerHTML += await header;

    agregarEstilo('/components/header/header.css');
    let bienvenidoMensaje = document.getElementById("nombre-usuario");
    let usuario = JSON.parse(sessionStorage.getItem("user"));

    bienvenidoMensaje.textContent =  `Bienvenid@ ${usuario.nombre}`;

    let btnCerrarSesion = document.getElementById("cerrar-sesion");

    btnCerrarSesion.addEventListener("click",(e)=>{

        e.preventDefault();
        let opcion = confirm("cerrar sesion?");

        if(opcion == true){
                cerrarSesion();
                location.href = "../index.html"
        }
    })
    
};

export const HeaderComponent = {
    header : getHeader
}