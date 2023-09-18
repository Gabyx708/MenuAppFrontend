import { Platillo } from "../../API/Platillo/Platillo.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
import platilloResumeComponente from "../platilloResume/platilloResumeComponent.js";

const divParaLista= document.getElementById("container_items_platillos");

async function getPlatillos() {

    let platillos = await Platillo.Get();
    agregarEstilo("/components/platilloResume/platilloResume.css");

    let listaPlatillos = Array.from(platillos.result);
    listaPlatillos.sort((a, b) => a.descripcion.localeCompare(b.descripcion));
    
    listaPlatillos.forEach(plato => {
        divParaLista.innerHTML += platilloResumeComponente(plato);
    })
}

const platilloResume = {
    pintarPlatillos : getPlatillos
}

export default platilloResume;