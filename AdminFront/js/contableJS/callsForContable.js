import { Costos } from "../../API/Costos/Costo.js";
import { navBar } from "../../components/navBar/navBar.js";

await navBar.getNavbar();


/*--- logica para opcion de "gastos del dia" ---*/
const btnGastoDia = document.getElementById("btn-gastoDia");

btnGastoDia.addEventListener("click",(e) =>{

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
            
            localStorage.setItem("report_dia",JSON.stringify(response.result));
        }
    });
    

})
