import { navBar } from "../components/navBar/navBar.js";
import platilloResume from "../components/platilloResume/platilloResume.js";
import { Platillo } from "../API/Platillo/Platillo.js";

await platilloResume.pintarPlatillos();
await navBar.getNavbar();


const btnCrearPlato = document.getElementById("btnCrearPlato");

btnCrearPlato.addEventListener("click", (e) =>{

    e.preventDefault();

    let descripcionPlato = document.getElementById("descripcion_plato").value;
    let precioPlato = document.getElementById("precio_plato").value;

    const platilloRequest = {
        descripcion : descripcionPlato.toLowerCase(),
        precio: precioPlato
    }

   
    Swal.fire({
        title: 'agregar este plato?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then(async (resultSwal) => {

        if (resultSwal.isConfirmed) {

            Platillo.Post(platilloRequest)
            .then(resultado => {
      
              if (resultado.response.ok) {
      
                  Swal.fire({
                      icon: 'success',
                      title: 'Platillo agregado con exito',
                      text: `ID: ${resultado.result.id}`,
                  })
                  .then(() => { location.reload() });
      
              } else {
                  Swal.fire({
                      icon: 'error',
                      title: 'Ups! ocurrio un problema',
                  })
              }
          })
      
      
      
          }

      });
          
})