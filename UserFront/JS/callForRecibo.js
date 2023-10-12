import { Recibo } from "../components/recibo/recibo.js";
import checkLogueo from "../utils/checkLogueo.js";
import { getPedido } from "./services/pedidoService.js";
import badgetComponent from "../components/badge/badget.js";

checkLogueo();
await Recibo.obtenerRecibo();

const pedido = getPedido();
const badget = document.getElementById("badget-container");

badget.innerHTML += badgetComponent(pedido.autorizacion);