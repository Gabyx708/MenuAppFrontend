export default function platilloResumeComponente(platoData){

    const truncatedDescripcion = platoData.descripcion; 

    return `<div class="plato_item sombra" value=${platoData.id}>
    <p>${truncatedDescripcion}</p>
    <p>$ ${platoData.precio}</p>
    <button value="${platoData.id}">
        editar
    </button>
</div>`
}