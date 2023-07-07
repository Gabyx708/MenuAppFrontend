import { agregarEstilo } from "../../utils/agregarEstilos.js";
import { Pedido } from "../../API/Pedido/Pedido.js";
import pedidoResume from "./pedidoResumeComponents.js";

const divResume = document.getElementsByClassName("recientes-container")[0];

async function getPedidos() {

    //let usuario = await JSON.parse(sessionStorage.getItem("user"))
    let pedidos = await Pedido.ultimosPedidos();
    agregarEstilo("/components/pedidoResume/pedidoResume.css");

    let listaPedidos = Array.from(pedidos);

    listaPedidos.forEach(pedido => {
        console.log(pedido)
        divResume.innerHTML += pedidoResume(pedido);
    })
}

const pedidoResumen = {
    pintarPedidos : getPedidos
}

export default pedidoResumen;