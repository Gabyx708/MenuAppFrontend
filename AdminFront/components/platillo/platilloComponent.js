export default function platilloComponente(platilloData){

    return `<div class="platillo-container sombra" quedan=${platilloData.stock - platilloData.pedido}>
    <div class="platillo-body" idMenuPlatillo=${platilloData.idMenuPlato}>
        <h2>${platilloData.stock - platilloData.pedido}</h2>
        <h5>DISPONIBLES</h5>
        <h6 class="black">${platilloData.descripcion}</h6>
        <h5 class="black">$ ${platilloData.precio}</h5>
    </div>
</div>`
}