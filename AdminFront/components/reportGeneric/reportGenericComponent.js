import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";

export default function reportGenericComponent(reportData){

let fechaHoy = formatoFechaEscrita(new Date);

    return `
    <section class="report_container">

    <div class="cuerpo_report">
        <div class="cabecera_reporte">
            <img src="/assets/images/report.png" alt="reporte" width="50px">
            <h2>REPORTE DE GASTOS</h2>
            <p class="right">fecha de consulta: ${fechaHoy}</p>
        </div>
        <hr>

        <div class="periodo_container">
            <h3>PERIODO CONSULTADO</h3>
            <div>
                <h4>DESDE: ${reportData.desde}</h4>
                <h4>HASTA: ${reportData.hasta}</h4>
            </div>
        </div>
        <hr>

        <div class="resultados_reporte">
            <h4 class="red">GASTO TOTAL: ${reportData.total}</h4>
            <h4 class="green">DESCUENTO TOTAL: ${reportData.descuento}</h4>
            <h4 class="yellow">CANT. DE PEDIDOS: ${reportData.cantPedido}</h4>
        </div>
    </div>
   
</section>
    `
};