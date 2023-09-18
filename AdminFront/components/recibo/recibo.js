import reciboComponete from "./reciboComponent.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";
 async function pintarRecibo(){

    agregarEstilo("/components/recibo/recibo.css");
    let reciboContainer = document.getElementById("recibo-container");
    let pedidoData =  sessionStorage.getItem("pedido");
    let pedidoDataObjt = await JSON.parse(pedidoData)
    reciboContainer.innerHTML += await reciboComponete(pedidoData);
}

export const Recibo = {

    obtenerRecibo : pintarRecibo
}