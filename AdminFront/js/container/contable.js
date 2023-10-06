import { Costos } from "../../API/Costos/Costo.js";
import { Personal } from "../../API/Personal/Personal.js";
import { navBar } from "../../components/navBar/navBar.js";

await navBar.getNavbar();


/*--- logica para opcion de "gastos del dia" ---*/
const btnGastoDia = document.getElementById("btn-gastoDia");

btnGastoDia.addEventListener("click", (e) => {

    e.preventDefault();

    Swal.fire({
        title: "Día a consultar",
        html: '<input id="datetimepicker" class="form-control" type="date">',
        showCancelButton: true,
        cancelButtonText: "cancelar",
        confirmButtonText: 'consultar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            const fechaSeleccionada = document.getElementById('datetimepicker').value;

            let response = await Costos.obtenerCostoDelDia(fechaSeleccionada);

            if (response.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'ocurrio un problema , intenta nuevamente',
                })
            } else {
                localStorage.setItem("report_dia", JSON.stringify(response.result));
                localStorage.setItem("tipo_reporte",JSON.stringify("dia"));
                location.href = "/pages/report.html";;
            }

        }
    });

})


/*--- logica para opcion de "gastos del periodo" ---*/
const btnGastoPeriodo = document.getElementById("btn-gastoPeriodo");

btnGastoPeriodo.addEventListener("click", async (e) => {
    e.preventDefault();

    Swal.fire({
        title: "periodo a consultar",
        html: 'DESDE <p> <p><input id="datetimepickerIni" class="form-control" type="date"><p> <p> HASTA <p> <p><input id="datetimepickerFin" class="form-control" type="date">',
        showCancelButton: true,
        cancelButtonText: "cancelar",
        confirmButtonText: 'consultar',
    }).then(async (result) => {
        if (result.isConfirmed) {
            const fechaIni = document.getElementById('datetimepickerIni').value;
            const fechaFin = document.getElementById('datetimepickerFin').value;

            Swal.fire({
                title: 'Procesando...',
                html: 'Por favor espera...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                let response = await Costos.obtenerCostoPeriodo(fechaIni, fechaFin);

                Swal.close(); // Cerrar la animación de carga

                if (response.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrió un problema, intenta nuevamente.',
                    });
                } else {
                    localStorage.setItem("report_dia", JSON.stringify(response.result));
                    localStorage.setItem("tipo_reporte", JSON.stringify("periodo"));
                    location.href = "/pages/report.html";;
                }
            } catch (error) {
                Swal.close(); // Cerrar la animación de carga en caso de error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al procesar la solicitud.'
                });
            }
        }
    });
});

/*--- logica para opcion de "gastos por empleado" ---*/
const btnGastoEmpleado = document.getElementById("btn-gastoEmpleado");

btnGastoEmpleado.addEventListener("click",async (e) =>{

    e.preventDefault();
    let personas = await Personal.GetAll();

    let listaPersonas = Array.from(personas.result);
    listaPersonas.sort((a, b) => a.nombre.localeCompare(b.nombre));

    Swal.fire({
        title: "empleado a consultar",
        html: '<select id="select_emp"></select><p> <p> DESDE <p> <p><input id="datetimepickerIni" class="form-control" type="date"><p> <p> HASTA <p> <p><input id="datetimepickerFin" class="form-control" type="date">',
        showCancelButton: true,
        cancelButtonText: "cancelar",
        confirmButtonText: 'consultar',
    }).then(async (result) => {
        if (result.isConfirmed) {
            const empleado = document.getElementById("select_emp").value;
            const fechaIni = document.getElementById('datetimepickerIni').value;
            const fechaFin = document.getElementById('datetimepickerFin').value;

            Swal.fire({
                title: 'Procesando...',
                html: 'Por favor espera...',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                let response = await Costos.obtenerCostoEmpleado(empleado,fechaIni,fechaFin);

                Swal.close(); // Cerrar la animación de carga


                if (response.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Ocurrió un problema, intenta nuevamente.',
                    });
                } else {
                    localStorage.setItem("report_dia", JSON.stringify(response.result));
                    localStorage.setItem("tipo_reporte", JSON.stringify("periodo_empleado"));
                    location.href = "/pages/report.html";
                }
            } catch (error) {
                Swal.close(); // Cerrar la animación de carga en caso de error
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Hubo un problema al procesar la solicitud.'
                });
            }
        }
    });

    const selectEmpleado = document.getElementById("select_emp");

    listaPersonas.forEach((persona) => {
        const option = document.createElement("option");
        option.value = persona.id.toLowerCase(); // Valor de la opción
        option.textContent = persona.nombre +" "+ persona.apellido + "  DNI:"+persona.dni; // Texto de la opción
        selectEmpleado.appendChild(option);
    });

})