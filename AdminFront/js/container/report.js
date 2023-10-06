import Reporte from "../../components/reportGeneric/reportGeneric.js";
import { navBar } from "../../components/navBar/navBar.js";
import  {Pedido} from "../../API/Pedido/Pedido.js";
import pedidoResume from "../../components/pedidoResume/pedidoResumeComponents.js";
import { agregarEstilo } from "../../utils/agregarEstilos.js";

Reporte.getReporte();
navBar.getNavbar();

agregarEstilo("/components/pedidoResume/pedidoResume.css");




let tipoReporte =  JSON.parse(localStorage.getItem("tipo_reporte"));
let reporte = JSON.parse(localStorage.getItem("report_dia"));

if(tipoReporte === "periodo_empleado"){

    let fechaIni = reporte.inicioPeriodo;
    let fechaFin = reporte.finPeriodo;
    let idEmpleado = reporte.id;

    let pedidos = await Pedido.conseguirPedidosFiltrado(idEmpleado,fechaIni,fechaFin);
    
    let listaPedidos =  Array.from(pedidos);

    pintarPedidosReporte(listaPedidos);  
}


if(tipoReporte === "periodo"){

    let fechaIni = reporte.inicio;
    let fechaFin = reporte.fin;
    let pedidos = await Pedido.conseguirPedidosFiltrado(null,fechaIni,fechaFin);
    
    let listaPedidos =  Array.from(pedidos);

    pintarPedidosReporte(listaPedidos);  
}

if(tipoReporte === "dia"){

    let fechaDia = reporte.fecha;
    let pedidos = await Pedido.conseguirPedidosFiltrado(null,fechaDia,fechaDia);
    
    let listaPedidos =  Array.from(pedidos);

    pintarPedidosReporte(listaPedidos);  
}



function pintarPedidosReporte(pedidos) {

    const divPedidos = document.getElementsByClassName("container_pedidos")[0];

    pedidos.forEach((pedido) => {
        divPedidos.innerHTML += pedidoResume(pedido);
    })

    /*-- logica para para consultar un pedido especifico--*/

    let botones = document.getElementsByClassName("boton-detalle");
    let lista = Array.from(botones);


    lista.forEach(boton => {

        boton.addEventListener("click", async () => {
            let idPedido = boton.getAttribute("value");
            let pedido = await Pedido.GetById(idPedido);
            sessionStorage.setItem("pedido", JSON.stringify(pedido));
            location.href = "../../pages/recibo.html";
        })

    })

}