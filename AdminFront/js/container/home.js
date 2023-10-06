import { Costos } from "../../API/Costos/Costo.js";
import { Menu } from "../../API/Menu/Menu.js";
import { navBar } from "../../components/navBar/navBar.js";
import pedidoResumen from "../../components/pedidoResume/pedidoResume.js";
import platillo from "../../components/platillo/platillo.js";
import cerrarSesion from "../../utils/cerrarSesion.js";
import formatoFecha from "../../utils/formatoFecha.js";
import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";
import { Pedido } from "../../API/Pedido/Pedido.js";

await pedidoResumen.pintarPedidos();
await navBar.getNavbar(); 
await platillo.pintarOpciones(); //pinta las opciones del menu mas reciente

/*-- logica para mostrar el dia actual --*/
let divDia = document.getElementById("dia_actual");
divDia.textContent = "Hoy es "+formatoFechaEscrita(new Date).toLowerCase();

/*-- logica para hacer el saludo --*/

let divSaludo = document.getElementById("saludo");
let nombreUsuario = await JSON.parse(sessionStorage.getItem("user")).nombre;


divSaludo.textContent = `Que bueno verte, ${nombreUsuario} !`;


/*-- logica para mostrar los monto del dia --*/

let fechaActual = new Date();
fechaActual.setDate(fechaActual.getDate() - 1);

let fecha = fechaActual.toISOString().split('T')[0];


let divMonto = document.getElementById("monto_hoy");
let costosDeHoy =  await Costos.obtenerCostoDelDia(fecha);
let resultado =  costosDeHoy;
let montoPagar = resultado.result.costoSinDescuento;
let cantidadDePedidos = resultado.result.cantidadPedidos;

// Formatear el monto como moneda
let montoFormateado = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(montoPagar);

divMonto.textContent = montoFormateado;

let divCantidad = document.getElementById("cantidad_pedidos");
divCantidad.textContent = cantidadDePedidos+" unidades";

let divLabelPedidos = document.getElementById("label_pedidos");
let divLabelCantidad = document.getElementById("label_cantidad");
let fechaResultado = resultado.result.fecha;

divLabelPedidos.textContent = `PEDIDOS DEL: ${formatoFechaEscrita(fechaResultado)}`;
divLabelCantidad.textContent =  `TOTAL PEDIDOS DEL: ${formatoFechaEscrita(fechaResultado)}`;

/*-- logica para mostrar info del menu --*/
let menu = await Menu.GetSiguiente();

let divFechaCarga = document.getElementById("date_carga");
let divFechaConsumo =  document.getElementById("date_consumo");
let divFechaCierre =  document.getElementById("date_cierre");

divFechaCierre.textContent = `fecha de cierre ${formatoFechaEscrita(menu.fecha_cierre,true).toLowerCase()}`;
divFechaCarga.textContent = `fecha de carga ${formatoFechaEscrita(menu.fecha_carga).toLowerCase()}`;
divFechaConsumo.textContent = `fecha de consumo ${formatoFechaEscrita(menu.fecha_consumo).toLowerCase()}`;

/*-- logica para para consultar un pedido especifico--*/

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