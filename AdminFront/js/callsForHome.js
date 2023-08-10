import { Costos } from "../API/Costos/Costo.js";
import { navBar } from "../components/navBar/navBar.js";
import pedidoResumen from "../components/pedidoResume/pedidoResume.js";
import cerrarSesion from "../utils/cerrarSesion.js";
import formatoFechaEscrita from "../utils/formatoFechaEscrita.js";

await pedidoResumen.pintarPedidos();
await navBar.getNavbar(); 



/*-- logica para hacer el saludo --*/

let divSaludo = document.getElementById("saludo");
let nombreUsuario = await JSON.parse(sessionStorage.getItem("user")).nombre;


divSaludo.textContent = `Que bueno verte, ${nombreUsuario} !`;


/*-- logica para mostrar los monto del dia --*/
let fecha = new Date().toISOString().split('T')[0];
console.log("---"+fecha)
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
divCantidad.textContent = cantidadDePedidos;

let divLabelPedidos = document.getElementById("label_pedidos");
let fechaResultado = resultado.result.fecha;

divLabelPedidos.textContent = `costo pedidos del : ${formatoFechaEscrita(fechaResultado)}`;
