import { agregarEstilo } from "../utils/agregarEstilos.js";

function contadorNavidad() {
    let fecha_hoy = new Date();

    let navidad = new Date(fecha_hoy.getFullYear(), 11, 25); 

    // Calcula la diferencia en milisegundos
    let diferencia = navidad - fecha_hoy;

    // Convierte la diferencia de milisegundos a días
    let dias_faltantes = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    if(dias_faltantes == 0){
        return `
        <div class="contador_navidad">
            <h3>FELIZ NAVIDAD</h3>
            <hr>
        </div>`;
    }

    if(dias_faltantes < 0){
        return `
        <div class="contador_navidad">
            <h3>FELIZ FIESTAS</h3>
            <hr>
        </div>`;
    }

    return `
        <div class="contador_navidad">
            <h3>FALTAN ${dias_faltantes} DIAS PARA NAVIDAD</h3>
            <hr>
        </div>`;
}


export function renderContadorNavidad(){

    agregarEstilo("/christmast/contadorNavidad.css")

    let divContador = document.getElementById("contador_navidad")

    divContador.innerHTML += contadorNavidad()
}