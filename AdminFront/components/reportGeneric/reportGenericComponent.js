import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";

export default function reportGenericComponent(reportData) {
    let fechaHoy = formatoFechaEscrita(new Date);
    let dataEmpleado = "";

    if (reportData.nombre !== null && reportData.nombre !== undefined) {
        dataEmpleado = `
        <div class="periodo_container">
            <h4>EMPLEADO CONSULTADO</h4>
            <div>
                <h5><label>Nombre y apellido:</label> ${reportData.nombre+" "+reportData.apellido}</h5>
                <h5><label>DNI:</label> ${reportData.dni}</h5>
            </div>
        </div> <hr>`;
    }

    return `
    <section class="report_container">
        <div class="cuerpo_report">
            <div class="cabecera_reporte">
                <img src="/assets/images/report.png" alt="reporte" width="50px">
                <h2>REPORTE DE GASTOS</h2>
                <p class="right">fecha de consulta: ${fechaHoy}</p>
            </div>
            <hr>
            ${dataEmpleado}
            <div class="periodo_container">
                <h4>PERIODO CONSULTADO</h4>
                <div>
                    <h5>DESDE: ${reportData.desde}</h5>
                    <h5>HASTA: ${reportData.hasta}</h5>
                </div>
            </div>
            <hr>
            <div class="resultados_reporte">
                <h4 class="red">GASTO TOTAL: ${reportData.total}</h4>
                <h4 class="green">DESCUENTO TOTAL: ${reportData.descuento}</h4>
                <h4 class="yellow">CANT. DE PEDIDOS: ${reportData.cantPedido}</h4>
            </div>
        </div>
    </section>`;
}
