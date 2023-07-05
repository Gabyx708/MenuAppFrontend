import { Menu } from "../API/Menu/Menu.js";
import { Pedido } from "../API/Pedido/pedido.js";
import { MenuComponent } from "../components/Menu/menu.js";
import platillo from "../components/platillo/platillo.js";


await platillo.pintarOpciones();
MenuComponent.menuComponente();

let opciones = Array.from(document.getElementsByClassName("platillo-body"));

opciones.forEach(opcion => {
    opcion.addEventListener("click",async () => {
        
        let idMenuPlatillo = opcion.getAttribute("idMenuPlatillo");
    
        Swal.fire({
            title: 'confirmas tu pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "cancelar",
            confirmButtonText: 'confirmar'
          }).then((result) => {
            if (result.isConfirmed) {
                
                hacerElPedido(idMenuPlatillo);
            }
          })


    });
});


const hacerElPedido = async (idMenuPlatillo) => {


    const requestPedido = {
        idUsuario : JSON.parse(sessionStorage.getItem("user")).id,
        menuPlatillos : [idMenuPlatillo]
    }

    let respuestaPedido =  await Pedido.hacerUnPedido(requestPedido);

    if(respuestaPedido.status == 409){
        
        Swal.fire({
            icon: 'error',
            title: 'Lo sentimos :(',
            text: 'parece que ya has hecho un pedido hoy',
          })

    }

    if(respuestaPedido.status == 201){

    let objetoPedido = await respuestaPedido;

    await sessionStorage.setItem("pedido",JSON.stringify(objetoPedido))
    location.href = "/pages/recibo.html"

    }

}




