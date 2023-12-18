import { crearUsuarioAutomation } from "../../API/Automation/Usuario.js";
import alertaGenerica from "../../utils/sweetAlert.js";
import isValidEmail from "../../utils/verificarMail.js";
import { getUser } from "../services/usuarioServices.js";

const usuario = getUser();

const btnSuscripcion = document.getElementById("btn_confirmar_suscripcion");

let labelId = document.getElementById("id")
let labelNombre = document.getElementById("nombre");
let labelApellido = document.getElementById("apellido");

labelId.textContent = usuario.id;
labelNombre.textContent = usuario.nombre;
labelApellido.textContent = usuario.apellido;


btnSuscripcion.addEventListener("click",(e) => {

let email = document.getElementById("mail").value;
    
    if(email.length <= 4){
        alertaGenerica("error","Ups!","no olvides colocar el mail...")
        return
    }

    let esValido = isValidEmail(email)
    
    if(esValido){
        //crear usuario
        const usuarioRequest = {
            id: usuario.id,
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            email: email
        }

        crearUsuario(usuarioRequest);

    }else{
        alertaGenerica("error","Ups!","este mail no es valido")
    }
})


async function  crearUsuario(usuario){
    
    Swal.showLoading();
    const respuesta = await crearUsuarioAutomation(usuario)

    if(respuesta.response.status == 201){

        Swal.close();

            const resultado = await Swal.fire({
                icon: "success",
                title: "EXITO",
                text: "suscripcion exitosa , revisa tu mail",
              })

              if(resultado.isConfirmed){
                location.href = "/pages/automatico.html"
              }
    }

    if(respuesta.response.status != 201){
        const message = respuesta.result.message

        alertaGenerica("error","ups! ocurrio un problema",message)
    }
}