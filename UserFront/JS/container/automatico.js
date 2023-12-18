import {Automatizacion} from '../../API/Personal/PersonalPedidoAutomation.js '
import { getCategorias } from "../../API/Automation/Categorias.js";
import { borrarPreferencias, cambiarEstadoPreferencia, crearPreferenciasUsuario, getPreferenciasUsuario } from "../../API/Automation/Preferencias.js";
import { getUsuarioAutomation } from "../../API/Automation/Usuario.js";
import frasesRobot from "../../utils/frasesRobot.js";
import alertaGenerica from "../../utils/sweetAlert.js";
import {getUser} from "../services/usuarioServices.js"


let idUsuario = getUser().id;


const preferencias = await getPreferenciasUsuario(idUsuario)
const statusCode =  preferencias.response.status
console.log(preferencias)

if(statusCode == 404){
    console.log("el usuario no existe en el servicio")
    //mostrar pantalla de inicio
    redireccionarInicioAutomatizacion();
}

if(statusCode == 200){
    //el usuario existe
   const preferenciasUsuario = Array.from(preferencias.result.categorias);
   let respuestaService = await getUsuarioAutomation(idUsuario);
   let usuarioAutomation = await respuestaService.result;
   
   pintarRobot(usuarioAutomation.activado);
   cambiarEstadoAutomatizacion();
   
   if(preferenciasUsuario.length == 0)
   {
        //mostrar solo preferencias
        
        pintarOpcionesPreferencias();
        setearPreferencias();
   }else
   {
        //pintar opciones
        pintarPreferenciasExistentes(preferenciasUsuario);
        habilitarBorradoPreferencias();
   }
}



function redireccionarInicioAutomatizacion(){
    location.href = "/pages/suscribirse.html"
}

async function pintarOpcionesPreferencias(){

    const categorias = Array.from((await getCategorias()).result);
    const selects = document.getElementsByTagName("select");

    const listaSelect = Array.from(selects)

    listaSelect.forEach((sl) => {
               
        categorias.forEach((c) => {
            const opcion = document.createElement("option");
            opcion.textContent = c.nombre;
            opcion.style.backgroundColor = c.color;

            sl.appendChild(opcion)

        })

        // Agregar manejador de eventos al select
        sl.addEventListener("change", function () {
            const selectedOption = sl.options[sl.selectedIndex];
            sl.style.backgroundColor = selectedOption.style.backgroundColor;
        });

    });
    
}

async function setearPreferencias(){

    const btnSetear = document.getElementById("btn_reset");

    btnSetear.addEventListener("click",(e) => {
        e.preventDefault();

        const listaPreferencias = conseguirListadoPreferencias();

        const prefenciaRequest = {
            idUsuario : idUsuario,
            categorias: listaPreferencias
        }

        popUpConfirmacion(prefenciaRequest);
        
    })
}

async function habilitarBorradoPreferencias(){

   const btnSetear = document.getElementById("btn_reset");
   btnSetear.textContent = "borrar preferencias"

   btnSetear.addEventListener("click",async (e)=>{
    e.preventDefault();
        const res = await borrarPreferencias(idUsuario);

        if(res.response.status == 200){
            alertaGenerica("success","LISTO!","se borraron todas tus preferencias, si el bot sigue activo empezara a pedir al azar")
                .then((res)=> {if(res.isConfirmed){ location.reload()}})
        }
   })
}

function conseguirListadoPreferencias()
{

    let categorias =  new Array();

    const selects = Array.from(document.getElementsByTagName("select"));

    for (let index = 0; index < selects.length; index++) {
        const select = selects[index];
        
        let nuevaPref = {
            categoria: select.value,
            prioridad: index
        }
            categorias.push(nuevaPref)     
    }

    return categorias;
}

function popUpConfirmacion(request){

    Swal.fire({
        title: "estas seguro se usar esas preferencias?",
        text: "de igual forma puedes cambiarlo mas tarde",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "si, estoy seguro"
      }).then(async (result) => {

        if (result.isConfirmed) {

            let respuesta = await crearPreferenciasUsuario(request)
            
            if(respuesta.response.status == 201){
                alertaGenerica("success","EXITO!","tus preferencias han sido seteados")
                .then((res)=> {if(res.isConfirmed){ location.reload()}})
                
            }else{
                alertaGenerica("error","Ups!",respuesta.response.message)
            }
        }
      });

}


function pintarPreferenciasExistentes(listaPreferencias){

    const selects = Array.from(document.getElementsByTagName("select"));
    const title = document.getElementById("title_header");
    const contenedorPrincipal = document.getElementById("preferencias_user");

    selects.forEach((sl)=> {
        sl.style.display = "none"
    })

    title.textContent = "MIS PREFERENCIAS"

    const preferencias = Array.from(listaPreferencias).sort((a, b) => a.prioridad - b.prioridad);;
    
    preferencias.forEach((p)=> {

        let container = document.createElement("div")
        let descripcion = document.createElement("p")
        let prioridad = document.createElement("p")

        descripcion.textContent = p.categoria
        prioridad.textContent = `#${parseInt(p.prioridad) + 1}`
        container.appendChild(prioridad)
        container.appendChild(descripcion)

        container.style.backgroundColor = p.color;
        container.classList.add("container_preferencia")
        contenedorPrincipal.appendChild(container)

    })
}

function cambiarEstadoAutomatizacion(){

    const btnOn = document.getElementById("btn_off")
    
    btnOn.addEventListener("click",async (e)=> {

        Swal.showLoading();

         const res = await Automatizacion.automatizarPedido({personalId: idUsuario , isAutomatico:true})

         if(res.response.status == 200)
         {  
            Swal.close();

            alertaGenerica("success","EXITO!","se cambio la configuracion")
            .then((res)=> {if(res.isConfirmed){ location.reload()}})
         }else{

            Swal.close();

            alertaGenerica("error","UPS!","ocurrio un problema")
            .then((res)=> {if(res.isConfirmed){ location.reload()}})
         }
    })
}

function pintarRobot(estado){

    let robotVideo = document.getElementById("robot")
    let btnOn = document.getElementById("btn_off")
    const dialogoBot =document.getElementById("globo")

    console.log(estado)

    if (estado != true) {
        let imgRobot = document.createElement("img");
        imgRobot.src = "/assets/images/robot-vaso-off.png";

        imgRobot.style.width = "200px"
        // Obtener el padre del elemento a reemplazar
        let padre = robotVideo.parentNode;

        // Reemplazar el video con la imagen
        padre.replaceChild(imgRobot, robotVideo);
        
        //cambiar dialogo
        dialogoBot.textContent = frasesRobot(true);
        btnOn.textContent = "encender"
        btnOn.style.backgroundColor = "green"

    }else{
        dialogoBot.textContent = frasesRobot(false);
    }
}