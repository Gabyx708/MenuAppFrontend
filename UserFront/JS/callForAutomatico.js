import { Automatizacion } from "../API/Personal/PersonalPedidoAutomation.js";

const textWarning = "Al activar esta funcionalidad, estás tomando la responsabilidad total de los posibles riesgos que conlleva. Estos riesgos pueden incluir quedarte sin la comida que has ordenado o que la misma siga siendo pedida en tu ausencia, ten en cuenta que no hay opciones para quejas o devoluciones. Por favor, asegúrate de entender plenamente las implicaciones antes de proceder.";



let persona = JSON.parse(sessionStorage.getItem("user"));

let isAutomatico  = persona.isAutomatico;

const btnActivar = document.getElementById("btn-active");
const labelText = document.getElementById("label-bot-text");
const imgRobot = document.getElementById("menu_bot_img");

if(isAutomatico == true){

    labelText.textContent = "el bot esta despierto y esta pidiendo por ti 🧐🧐"
    btnActivar.textContent = "DESACTIVAR";
    btnActivar.classList.add("btn-danger");
    btnActivar.classList.remove("bg-success");

    imgRobot.src = "/assets/images/robot.png";
}

btnActivar.addEventListener("click",async (e)=>{

    e.preventDefault();
    
    const AutomationRequest = {

        personalId : persona.id,
        isAutomatico : !persona.isAutomatico
    }

    console.log(AutomationRequest)

    if (isAutomatico == false) {

        Swal.fire({
            title: 'LEE CON CUIDADO',
            text: textWarning,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: "cancelar",
            confirmButtonText: 'Sí, estoy seguro'

        }).then(async (result) => {
            if (result.isConfirmed) {

                await Automatizacion.automatizarPedido(AutomationRequest);

                // Modifica el atributo isAutomatico, invirtiéndolo
                persona.isAutomatico = AutomationRequest.isAutomatico;

                // Vuelve a guardar el objeto modificado en sessionStorage
                sessionStorage.setItem("user", JSON.stringify(persona));

                Swal.fire(
                    'Activada',
                    'el bot esta despierto.',
                    'success'
                ).then((resultado) => { location.reload() })
            }
        })

    } else {

        try {
            await Automatizacion.automatizarPedido(AutomationRequest)
                .then((resulti) => {
                    // Modifica el atributo isAutomatico, invirtiéndolo
                    persona.isAutomatico = AutomationRequest.isAutomatico;

                    // Vuelve a guardar el objeto modificado en sessionStorage
                    sessionStorage.setItem("user", JSON.stringify(persona));

                    Swal.fire(
                        'EXITOSO',
                        "el bot volvio a dormirse",
                        'success').then((resultado) => { location.reload() })
                   
                });
        } catch (e) {
            Swal.fire(
                'ERROR',
                "no se pudo despertar al bot",
                'error')
        }

    }

})