export default function cardPersonal(personalData){

    return `
    <div class="card-personal">
    <h2>Nuevo Personal</h2>
    <hr>
    <div>
    <p>ID: ${personalData.id}</p><p>Nombre/s: ${personalData.nombre}</p><p>Apellido: ${personalData.apellido}</p>
    </div>
    <div>
    <p>DNI: ${personalData.dni}</p><p>Email: ${personalData.mail}</p><p>Telefono: ${personalData.telefono}</p>
    </div>
    <div>
    <p>Fecha Nacimiento: ${personalData.fecha_nacimiento}</p><p>Fecha ingreso: ${personalData.fecha_ingreso}</p><p>Fecha carga en sistema: ${personalData.fecha_alta}</p>
    </div>
    </div>`
}