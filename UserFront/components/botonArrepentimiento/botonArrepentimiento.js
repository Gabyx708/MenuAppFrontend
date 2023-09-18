import { Pedido } from "../../API/Pedido/Pedido.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
import tarjetaArrepentimientoComponent from "./botonArrepentimientoComponet.js";

async function pintarArrepentimientoCard() {

    agregarEstilo("/components/botonArrepentimiento/botonArrepentimiento.css");
    let menuContainer = document.getElementById("menu-opciones-container");

    menuContainer.innerHTML += tarjetaArrepentimientoComponent();

    let btnCancelarPedido = document.getElementById("btn-cancelar-pedido");

    btnCancelarPedido.addEventListener("click", async (e) => {
        e.preventDefault();
        
        let idPedidoEliminar = await JSON.parse(sessionStorage.getItem("pedidoHecho"))[0].id;
        
      
          let response = await Pedido.borrarPedido(idPedidoEliminar);

          console.log(response)

          if (response.ok) {
            // Peticion exitosa, mostrar SweetAlert
            sessionStorage.removeItem("pedidoHecho");
            Swal.fire({
              title: 'Pedido eliminado',
              text: 'El pedido se ha eliminado exitosamente',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              // Redireccionar después de hacer clic en "OK"
              window.location.href = './home.html';
            });
          }
            
          if (!response.ok) {
          // Manejar errores en la petición
          Swal.fire({
            title: 'Ups! ocurrios un problema',
            icon: 'error',
            confirmButtonText: 'OK'
          }).then(() => {
          
            window.location.href = './home.html';
          });
          }

      }); //fin evento click
      
}

export const botonArrepentimiento = {
    pintarArrepentimientoCard : pintarArrepentimientoCard
}