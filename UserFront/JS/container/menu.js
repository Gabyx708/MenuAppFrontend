import { FooterComponent } from "../../components/footer/footer.js";
import { HeaderComponent } from "../../components/header/header.js";
import { getMenu } from "../services/menuServices.js";
import formatoFechaEscrita  from "../../utils/formatoFechaEscrita.js"
import checkLogueo from "../../utils/checkLogueo.js";

checkLogueo();
const menu = getMenu();

window.onload = () => {
    FooterComponent.footer();
    HeaderComponent.header();
    
    renderTablaDescripcion();
    renderTablaPlatillos();
}

function renderTablaDescripcion(){

    const id = document.getElementById("idDescrip");
    const fechaConsumo = document.getElementById("fechConsuDescrip")
    const fechaCarga = document.getElementById("fechaCargaDescrip")
    const fechaCierre = document.getElementById("fechaCierreDescrip")

    id.innerHTML = menu.id
    fechaConsumo.innerHTML = formatoFechaEscrita(menu.fecha_consumo)
    fechaCarga.innerHTML = formatoFechaEscrita(menu.fecha_carga,true)
    fechaCierre.innerHTML = formatoFechaEscrita(menu.fecha_cierre,true)
}

function renderTablaPlatillos(){

    let platillos = menu.platillos
    let arrayPlatillos = Array.from(platillos)
    const cuerpoTabla = document.getElementById("table_body")
    
    arrayPlatillos.forEach((plato) => {
        cuerpoTabla.innerHTML += renderPlatoComponent(plato)
    })
}

function renderPlatoComponent(platoData){
    return `
        <tr>
            <td>${platoData.descripcion}</td>
            <td>${platoData.pedido}</td>
            <td>${platoData.stock - platoData.pedido}</td>
            <td>$${platoData.precio}</td>
        </tr>`
}
