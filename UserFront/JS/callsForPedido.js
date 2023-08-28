import { Menu } from "../API/Menu/Menu.js";
import { Pedido } from "../API/Pedido/Pedido.js";
import { MenuComponent } from "../components/Menu/menu.js";
import { botonArrepentimiento } from "../components/botonArrepentimiento/botonArrepentimiento.js";
import platillo from "../components/platillo/platillo.js";

const ultimoPedido = await Pedido.ultimoPedido();
sessionStorage.setItem("pedidoHecho",JSON.stringify(ultimoPedido));

const pedidoDeHoy = await JSON.stringify(sessionStorage.getItem("pedidoHecho"));

await platillo.pintarOpciones();
MenuComponent.menuComponente();

let diaDeHoy = new Date().getDate();
let diaPedido = new Date(pedidoDeHoy[0].pedido).getDate();

console.log(diaDeHoy+"----"+pedidoDeHoy)

if( diaDeHoy == diaPedido){
    
    let opcionesPlatillo = Array.from(document.getElementsByClassName("platillo-container"));

    opcionesPlatillo.forEach(opcion =>{
            opcion.style.display = "none";
    })

    let menuOpcionesContainer = document.getElementById("menu-opciones-container");
    menuOpcionesContainer.style.display = "flex";
    botonArrepentimiento.pintarArrepentimientoCard();   
}

let opciones = Array.from(document.getElementsByClassName("platillo-body"));

opciones.forEach(opcion => {
    opcion.addEventListener("click",async () => {
        
        let idMenuPlatillo = opcion.getAttribute("idMenuPlatillo");
    
        const result = await Swal.fire({
            title: '¿Confirmas tu pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Confirmar'
          });
        
          if (result.isConfirmed) {
            await hacerElPedido(idMenuPlatillo);
          }


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

    }else{
        let objetoPedido = await respuestaPedido;

        let objectoMenu = JSON.parse(sessionStorage.getItem("menu"));

        await sessionStorage.setItem("pedido",JSON.stringify(objetoPedido));
        await localStorage.setItem("pedidoHecho",JSON.stringify(objetoPedido));
        await localStorage.setItem("fecha_caduca_pedido",objectoMenu.fecha_cierre)
        location.href = "/pages/recibo.html"
    }

}
  




