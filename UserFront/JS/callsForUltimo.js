import { Pedido } from "../API/Pedido/Pedido.js";
import pedidoResumen from "../components/pedidoResume/pedidoResume.js";

await pedidoResumen.pintarPedidos();

let botones = document.getElementsByClassName("boton-detalle");
let lista  = Array.from(botones);


lista.forEach(boton => {

    boton.addEventListener("click",async ()=>{
        let idPedido =  boton.getAttribute("value");
        let pedido = await Pedido.GetById(idPedido);
        sessionStorage.setItem("pedido",JSON.stringify(pedido));
        location.href = "../pages/recibo.html";
    })
    
})