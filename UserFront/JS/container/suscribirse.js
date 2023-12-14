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
        alert("cacio")
        return
    }

    let esValido = isValidEmail(email)
    
    if(esValido){
        //crear usuario
    }
})