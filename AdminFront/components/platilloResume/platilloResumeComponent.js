export default function platilloResumeComponente(platoData){

    const truncatedDescripcion = platoData.descripcion.substring(0, 15) + '...'; 

    return `<div class="plato_item sombra">
    <p>${truncatedDescripcion}</p>
    <p>$ ${platoData.precio}</p>
    <button value="${platoData.id}">
        editar
    </button>
</div>`
}