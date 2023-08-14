import { agregarEstilo } from "../../utils/agregarEstilos.js";
import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";
import reportGenericComponent from "./reportGenericComponent.js";

//da formato a la cantidad en moneda
function  montoFormateado(monto) {return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(monto)};


const divReport = document.getElementsByClassName("report-container")[0];

async function getReporte(){

    let reportData = await JSON.parse(localStorage.getItem("report_dia"));
    let tipoReporte = JSON.parse(localStorage.getItem("tipo_reporte"));

    agregarEstilo("/components/reportGeneric/reportGeneric.css");


    if(tipoReporte === "dia"){
        pintarReporteDia(reportData);
        console.log("dia")
    }

    if(tipoReporte === "periodo"){
        pintarReportePeriodo(reportData);
    }

    if(tipoReporte === "periodo_empleado"){

        if (reportData === null) {

            Swal.fire({
                icon: 'info',
                title: 'Oops...',
                text: 'No encontramos nada',
            }).then(() => {
                window.history.back(); // Navegar hacia atrás en la historia del navegador
            });

        }
        
        pintarReporteEmpleado(reportData);
    }

}

function pintarReporteDia(reportData){

    let reportMap = {
        desde : formatoFechaEscrita(reportData.fecha),
        hasta: formatoFechaEscrita(reportData.fecha),
        total: montoFormateado(reportData.costoSinDescuento),
        descuento: montoFormateado(reportData.costoConDescuento),
        cantPedido: reportData.cantidadPedidos
    }

    
    divReport.innerHTML = reportGenericComponent(reportMap);

}

function pintarReportePeriodo(reportData){
    console.log(reportData)
    let reportMap = {
        desde : formatoFechaEscrita(reportData.inicio),
        hasta: formatoFechaEscrita(reportData.fin),
        total: montoFormateado(reportData.costoTotal),
        descuento: montoFormateado(reportData.totalDescuentos),
        cantPedido: reportData.cantPedidos
    }

    divReport.innerHTML = reportGenericComponent(reportMap);

}

function pintarReporteEmpleado(reportData){
    
    let reportMap = {
        nombre : reportData.nombre,
        apellido: reportData.apellido,
        dni : reportData.dni,
        desde : formatoFechaEscrita(reportData.inicioPeriodo),
        hasta: formatoFechaEscrita(reportData.finPeriodo),
        total: montoFormateado(reportData.costoTotal),
        descuento: montoFormateado(reportData.descuento),
        cantPedido: reportData.cantidadPedidos
    }

    divReport.innerHTML = reportGenericComponent(reportMap);

}



const Reporte = {
    getReporte : getReporte
}

export default Reporte;