export default function cardPlatillo(platilloData){

    return `<h2>Se agrego un nuevo platillo</h2>
    <hr>
    <h3>codigo interno: ${platilloData.id}</h3>
    <h3>descripcion: ${platilloData.descripcion}</h3>
    <h3>precio: $${platilloData.precio}</h3>
    <h4>habilitado: ${platilloData.activado}</h4>`;
}