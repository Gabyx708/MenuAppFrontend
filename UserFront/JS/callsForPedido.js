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
        
        let confirmar = confirm("confirmar pedido?");

        if(confirmar == true){
            
            const requestPedido = {
                idUsuario : JSON.parse(sessionStorage.getItem("user")).id,
                menuPlatillos : [idMenuPlatillo]
            }

            let respuestaPedido =  await Pedido.hacerUnPedido(requestPedido);
            let objetoPedido = await respuestaPedido;

            await sessionStorage.setItem("pedido",JSON.stringify(objetoPedido))
            location.href = "/pages/recibo.html"
        }
    });
});




