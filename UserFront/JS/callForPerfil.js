import { FooterComponent } from "../components/footer/footer.js";
import { HeaderComponent } from "../components/header/header.js";
import checkLogueo from "../utils/checkLogueo.js";
import formatoFechaEscrita from "../utils/formatoFechaEscrita.js";
import formatoFecha from "../utils/formatoFecha.js";
import { Login } from "../API/Personal/PersonalLogin.js";
import cerrarSesion from "../utils/cerrarSesion.js";

checkLogueo();

window.onload = () => {
    FooterComponent.footer();
    HeaderComponent.header();
    RenderProfile(getUser());
    ChangePasswordEven();
}


const getUser = () => {

    let user = sessionStorage.getItem("user");

    return JSON.parse(user);
}

const RenderProfile = (user) => {

    const nameText = document.getElementById("user_name");
    const dniCard = document.getElementById("user_dni");
    const brithDayCard = document.getElementById("user_birthday");
    const dateCard = document.getElementById("user_date");
    const autoCard = document.getElementById("user_automa");

    dniCard.textContent = user.dni;
    brithDayCard.textContent = formatoFechaEscrita(user.fecha_nacimiento);
    dateCard.textContent = formatoFecha(new Date(user.fecha_ingreso));

    if(user.isAutomatico){
        autoCard.textContent = "activada";
    }else{
        autoCard.textContent = "desactivada";
    }
    
    nameText.textContent = user.nombre+" "+user.apellido;
}


const ChangePasswordEven = () => {

    let btnPassw = document.getElementById("btn_passw");
    btnPassw.addEventListener("click",()=> {
        alerta();
    })
}


const alerta = () => {
    Swal.fire({
        title: "Cambiar Contraseña",
        html:
          '<input type="text" id="passw" placeholder="contraseña original" class="swal2-input">' +
          '<input type="password" id="password" placeholder="nueva contraseña" class="swal2-input">' +
          '<input type="password" id="password2" placeholder="repite nueva contraseña" class="swal2-input">',
        showCancelButton: true,
        confirmButtonColor : "#0e88ec",
        confirmButtonText: 'cambiar',
        cancelButtonText: 'Cancelar',
        preConfirm: async () => {
          // Puedes acceder a los valores de los campos de entrada aquí
          const passwordOri = document.getElementById('passw').value;
          const newPassword = document.getElementById('password').value;
          const newPassword2 = document.getElementById('password2').value;
            
          let ambasSeanNulas =  (newPassword== null || newPassword2 == null);
          let ambasSeanEnBlanco=  (newPassword=="" || newPassword2 == "");

          if(newPassword != newPassword2 || ambasSeanNulas || ambasSeanEnBlanco ){
                Swal.fire("asegurate de repetir la contraseña dos veces")
                return

          }else{

            const userId = getUser().id;
          
            const PersonalPaswordRequest = {
              originalPassword : passwordOri,
              newPassword : newPassword
            }
  
            let response = await Login.changePassword(userId,PersonalPaswordRequest);
            
            if(response.status == 409){
                Swal.fire({
                    title: "Ups! contraseña incorrecta",
                    confirmButtonColor : "#0e88ec"})
            }
            
            if(response.status == 204){
                Swal.fire({
                    title: "la contraseña se cambio con exito!",
                    confirmButtonColor : "#0e88ec"})
                    .then((result)=> {
                        if(result.isConfirmed) {
                            cerrarSesion();
                            location.reload();
                        }
                    })
            }
          }
          


        }
    });
    
}