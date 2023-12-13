export default function platilloResumeComponente(platoData){

    const truncatedDescripcion = platoData.descripcion; 

    return `<div class="plato_item sombra" value=${platoData.id}>
    <p>${truncatedDescripcion}</p>
    <h6>$ ${platoData.precio}</h6>
</div>`
}