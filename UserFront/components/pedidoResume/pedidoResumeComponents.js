import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js"

export default function pedidoResume(pedidoData){

    let fecha = new Date(pedidoData.fecha);

    return `<div class="pedido_item">
    <p class="pedido">Pedido N°:${pedidoData.id}</p>
    <p>recibo N°:${pedidoData.recibo}</p>
    <p>Fecha: ${formatoFechaEscrita(fecha,true)}</p>
    <button value="${pedidoData.id}" class="boton-detalle">
        ver detalle
    </button>
</div>`
}