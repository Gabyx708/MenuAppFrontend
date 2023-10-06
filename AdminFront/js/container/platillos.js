import { navBar } from "../../components/navBar/navBar.js";
import platilloResume from "../../components/platilloResume/platilloResume.js";
import { Platillo } from "../../API/Platillo/Platillo.js";

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

/*--LOGICA PARA ALTERAR TODOS LOS PRECIOS--*/
let btnAlterar = document.getElementById("btn_precio_universal");

btnAlterar.addEventListener("click", async (e) => {
    e.preventDefault();
    let nuevoPrecio = document.getElementById("precio_universal").value;

    Swal.fire({
        title: '¿Estás seguro? El nuevo precio se aplicará a TODOS los platillos',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar'
    }).then(async (result) => {
        
        if (result.isConfirmed) {
            // Aquí realizas la petición al servidor para alterar los precios.
            // Supongo que Platillo.alterarPrecioAll() es una función asíncrona.

            let response = await Platillo.alterarPrecioAll(nuevoPrecio);
                console.log(response.status)
            if (response.status == 204) {

                Swal.fire({
                    title: 'Completado',
                    text: 'La operación se ha completado exitosamente.',
                    icon: 'success'
                }).then(() => {
                    // Recargar la página después de mostrar la alerta de éxito.
                    location.reload();
                });

            }

            if (response.status != 204) {

                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un error al procesar la operación.',
                    icon: 'error'
                });
            }}
    });
});
