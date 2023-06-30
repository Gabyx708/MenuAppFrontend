export default async function reciboComponete(pedidoResponse) {

    let pedidoResponseObject = await JSON.parse(pedidoResponse);
    const  platillosLista  = pedidoResponseObject.platillos;
    
    let total = pedidoResponseObject.recibo.precio - (pedidoResponseObject.recibo.descuento / 100* pedidoResponseObject.recibo.precio);
   
    // Generar filas de la tabla dinámicamente
    const itemsTabla = platillosLista.map((platillo) => `
      <tr>
        <td>${platillo.descripcion}</td>
        <td>$ ${platillo.precio}</td>
      </tr>
    `).join('');
  
    return `<div id="recibo">
      <h3>Recibo: N° ${pedidoResponseObject.recibo.id}</h3>
      <h4>PARA: ${pedidoResponseObject.nombre}</h4>
  
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
  