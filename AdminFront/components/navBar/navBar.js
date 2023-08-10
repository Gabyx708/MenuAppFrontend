import { agregarEstilo } from "../../utils/agregarEstilos.js";
import cerrarSesion from "../../utils/cerrarSesion.js";

const bodyHtml = document.getElementsByClassName("container-principal")[0];

async function getNavBar() {

    const response = await fetch('/components/navBar/navBar.html');
    const nav = await response.text();
    bodyHtml.innerHTML += nav;

    agregarEstilo('/components/navBar/navBar.css');

    const btnCerrarSesion = document.getElementById("cerrar-sesion");

    btnCerrarSesion.addEventListener("click", (e) => {
        e.preventDefault();

        Swal.fire({
            title: 'estas a punto de cerrar sesion',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "cancelar",
            confirmButtonText: 'cerrar sesion'
        }).then((result) => {
            if (result.isConfirmed) {
                cerrarSesion();
                location.href = "/index.html";
            }
        })
    })

};

export const navBar = {
    getNavbar : getNavBar
}