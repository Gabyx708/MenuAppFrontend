import { navBar } from "../components/navBar/navBar.js";
import cerrarSesion from "../utils/cerrarSesion.js";

await navBar.getNavbar();

const btnCerrarSesion = document.getElementById("cerrar-sesion");

btnCerrarSesion.addEventListener("click",(e) => {
        e.preventDefault();
        
        cerrarSesion();
        location.href = "/index.html";
})

