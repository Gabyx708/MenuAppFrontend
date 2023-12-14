import { Automatizacion } from "../../../API/Personal/PersonalPedidoAutomation.js";
import { getPreferenciasUsuario } from "../../API/Automation/Preferencias.js";
import {getUser} from "../services/usuarioServices.js"

const textWarning = "Al activar esta funcionalidad, estás tomando la responsabilidad total de los posibles riesgos que conlleva. Estos riesgos pueden incluir quedarte sin la comida que has ordenado o que la misma siga siendo pedida en tu ausencia, ten en cuenta que no hay opciones para quejas o devoluciones. Por favor, asegúrate de entender plenamente las implicaciones antes de proceder.";

let idUsuario = getUser().id;

const preferencias = await getPreferenciasUsuario(idUsuario)
const statusCode =  preferencias.response.status

if(statusCode == 404){
    console.log("el usuario no existe en el servicio")
    //mostrar pantalla de inicio
    redireccionarInicioAutomatizacion();
}



function redireccionarInicioAutomatizacion(){
    location.href = "/pages/suscribirse.html"
}