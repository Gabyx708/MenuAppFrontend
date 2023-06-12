export default function cardPlatillo(platilloData){

    return `
    <div class="card-plato">
    <h2>Se agrego un nuevo platillo</h2>
    <hr>
    <h4>codigo interno:</h4> <p>${platilloData.id}</p>
    <h4>descripcion:</h4> <p>${platilloData.descripcion}</p>
    <h4>precio:</h4> <p>$${platilloData.precio}</p>
    <h4>habilitado:</h4> <p>${platilloData.activado}</p>
    </div>`
}