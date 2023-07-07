import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js"

export default function pedidoResume(pedidoData){
    let fecha = new Date(pedidoData.fecha);
    let pedido = String(pedidoData.id).substring(0,String(pedidoData.id).length -22);
    return `<div class="pedido_item">
    <p class="pedido">Pedido N°:${pedido}*****</p>
    <p>Fecha: ${formatoFechaEscrita(fecha,true)}</p>
    <button value="${pedidoData.id}" class="boton-detalle">
        ver detalle
    </button>
</div>`
}