import { agregarEstilo } from "../../utils/agregarEstilos.js";
import { Pedido } from "../../API/Pedido/Pedido.js";
import pedidoResume from "./pedidoResumeComponents.js";

const divResume = document.getElementById("pedidos_item_container");

async function getPedidos() {

    let usuario = await JSON.parse(sessionStorage.getItem("user"))
    let pedidos = await Pedido.ultimosPedidos(usuario.id);
    agregarEstilo("/components/pedidoResume/pedidoResume.css");

    let listaPedidos = Array.from(pedidos);

    listaPedidos.forEach(pedido => {
        divResume.innerHTML += pedidoResume(pedido);
    })
}

const pedidoResumen = {
    pintarPedidos : getPedidos
}

export default pedidoResumen;