import { Personal } from "./services/personal.js";

const button = document.getElementById("enviar-datos");



button.addEventListener("click", (e) => {
    
    e.preventDefault();

    const validarFields = () => {
        const requiredFields = [
          "personal_nombres",
          "personal_apellido",
          "personal_dni",
          "personal_mail",
          "personal_nac",
          "personal_ing",
        ];
    
        return requiredFields.every((field) => {
          const value = document.getElementById(field).value.trim();
          return value !== "";
        });
      };

if(validarFields()){

  let nombres = document.getElementById("personal_nombres").value;
  let apellido = document.getElementById("personal_apellido").value;
  let dni = document.getElementById("personal_dni").value;
  let mail = document.getElementById("personal_mail").value;
  let fecha_nacimiento = document.getElementById("personal_nac").value;
  let fecha_ingreso = document.getElementById("personal_ing").value;
  let celular = document.getElementById("personal_cel").value;
  let privilegio = document.getElementById("personal_privig").value;

  const PersonalRequest = {
    nombre: nombres,
    apellido: apellido,
    dni: dni,
    fecha_nacimiento: fecha_nacimiento,
    fecha_ingreso: fecha_ingreso,
    mail: mail,
    telefono: celular,
    privilegio: privilegio,
  };

  agregarPersonal(PersonalRequest);
}else{
    alert("falta algun campo!");
}

});



function agregarPersonal(personalRequest){

    Personal.Post(personalRequest)
    .then(resultado => {
        console.log(resultado);
        alert("se ah creado el usuario: "+resultado.id);
    })
};