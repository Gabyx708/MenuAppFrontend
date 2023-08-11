import { agregarEstilo } from "../../utils/agregarEstilos.js";
import reportGenericComponent from "./reportGenericComponent.js";

const divReport = document.getElementsByClassName("report-container")[0];

async function getReporte(){

    let reportData = await JSON.parse(localStorage.getItem("report_dia"));
    agregarEstilo("/components/reportGeneric/reportGeneric.css");

    let reportMap = {
        desde : reportData.fecha,
        hasta: reportData.fecha,
        total: montoFormateado(reportData.costoSinDescuento),
        descuento: montoFormateado(reportData.costoConDescuento),
        cantPedido: reportData.cantidadPedidos
    }

    console.log(reportData)
    divReport.innerHTML += reportGenericComponent(reportMap);
}

function  montoFormateado(monto) {return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
}).format(monto)};

const Reporte = {
    getReporte : getReporte
}

export default Reporte;