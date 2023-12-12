export default function platilloComponente(platilloData){

    return `<div class="platillo-container sombra" quedan=${platilloData.stock - platilloData.pedido}>
    <div class="platillo-body" idMenuPlatillo=${platilloData.idMenuPlato}>
        <h3>DISPONIBLES ${platilloData.stock - platilloData.pedido}</h3>
        <h5 class="text-pedido">PEDIDOS ${platilloData.pedido}</h5>
        <h4 class="black">${platilloData.descripcion}</h4>
        <div class=categoria-container style="background-color:${platilloData.categoria.color}">
        <h6>${platilloData.categoria.descripcion}</h6>
        </div>
        <h5 class="black">$ ${platilloData.precio}</h5>
    </div>
</div>`
}