import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";


export default function pintarMenu(menuData){
    return `<div id="menu_info">
    <h3>Menu</h3>
    <hr>
    <h4>PARA EL: ${formatoFechaEscrita(Date.parse(menuData.fecha_consumo),false)}</h4>
    <h4>CIERRA EL: ${formatoFechaEscrita(Date.parse(menuData.fecha_cierre),true)}</h4>
    </div>`;
    
} 