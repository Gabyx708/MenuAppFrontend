import { navBar } from "../components/navBar/navBar.js";
import { Personal } from "../API/Personal/Personal.js";

await navBar.getNavbar();


/*--logica del formulario-- */
const btnCargarEmpleado = document.getElementById("btn_carga_empleado");



btnCargarEmpleado.addEventListener("click", (e) => {
    e.preventDefault();


    const personalNombre = document.getElementById("nombre").value;
    const personalApellido = document.getElementById("apellido").value;
    const personalDni = document.getElementById("dni").value;
    const personalPrivilegio = document.getElementById("permisos_privilegio").value;
    const personalFechaIngreso = document.getElementById("fecha_ingreso").value;
    const personalFechaNacimiento = document.getElementById("fecha_nacimiento").value;
    const personalCorreo = document.getElementById("correo_electronico").value;
    const personalTelefono = document.getElementById("num_telefono").value;


    const personalRequest = {
        nombre: personalNombre,
        apellido: personalApellido,
        dni: personalDni,
        fecha_nacimiento: personalFechaNacimiento,
        fecha_ingreso: personalFechaIngreso,
        mail: personalCorreo,
        telefono: personalTelefono,
        privilegio: personalPrivilegio
    }

    Swal.fire({
        title: 'estas a punto de carga un empleado , estas seguro?',
        text: "revisa bien los datos por favor :)",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'confirmar',
        cancelButtonText: "cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
                
            Personal.Post(personalRequest)
            .then( result => console.log(result))
        }
      })
})