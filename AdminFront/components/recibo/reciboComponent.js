import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";

export default async function reciboComponete(pedidoResponse) {

    let pedidoResponseObject = await JSON.parse(pedidoResponse);
    const  platillosLista  = pedidoResponseObject.platillos;
    let fecha = new Date(pedidoResponseObject.fecha);
    
    let total = pedidoResponseObject.recibo.precio - (pedidoResponseObject.recibo.descuento / 100* pedidoResponseObject.recibo.precio);
   
    // Generar filas de la tabla dinámicamente
    const itemsTabla = platillosLista.map((platillo) => `
      <tr>
        <td>${platillo.descripcion}</td>
        <td>$ ${platillo.precio}</td>
      </tr>
    `).join('');
  
    return `<div id="recibo">
      <h4>Recibo: N° ${(pedidoResponseObject.recibo.id).toUpperCase()}</h4>
      <hr>
      <h6>Pedido: N° ${(pedidoResponseObject.idPedido).toUpperCase()}</h6>
      <p>fecha de pedido: ${(formatoFechaEscrita(fecha,true)).toLowerCase()}</p>
      <p>pedido por: ${pedidoResponseObject.nombre}</p>
      <hr>
      <table>
        <thead>
          <tr>
            <td>DESCRIPCIÓN</td>
            <td>PRECIO</td>
          </tr>
        </thead>
        ${itemsTabla}
      </table>
  
      <div class="resumen">
        <h4 class="descuento">Descuento: ${pedidoResponseObject.recibo.descuento}%</h4>
        <h4 class="total">Total: $${total}</h4>
      </div>
    </div>`;
  }
  