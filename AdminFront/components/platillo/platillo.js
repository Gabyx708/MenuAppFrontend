import { Menu } from "../../API/Menu/Menu.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
import platilloComponente from "./platilloComponent.js";


async function pintarOpciones() {

    agregarEstilo("/components/platillo/platillo.css");
    let menuContainer = document.getElementById("menu-opciones-container");
    let menuDelDia = await Menu.GetSiguiente();
    let listaPlatillos = menuDelDia.platillos;

    listaPlatillos.forEach(opcion => {
        menuContainer.innerHTML += platilloComponente(opcion)
        

        let opcionesDiv = document.getElementsByClassName("platillo-container");
        
        let opcionesDivLista = Array.from(opcionesDiv);
        
        opcionesDivLista.forEach(div => {
            let cantidad = div.getAttribute("quedan");
            
            if(cantidad == 0){
                    div.classList.add("desactivo");

            }
        })
    });

}


const platillo = {
    pintarOpciones : pintarOpciones
}

export default platillo;