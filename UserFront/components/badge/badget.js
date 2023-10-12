import { agregarEstilo } from "../../utils/agregarEstilos.js";

export default function badgetComponent(data) {

   let nombre = data.nombre;
   let urlImage = "/assets/icons/userWhite.png"
   let color;

   if(nombre === "BOT BOT"){
        nombre = "BOT"
        urlImage = "/assets/icons/robotWhite.png"
   }else{
    color = "orange"
   }

    agregarEstilo("/components/badge/badget.css");

    return  `<div class="badget_auth" style="background-color:${color}">
    <p>AUTORIZADO: <span>${nombre}</span></p>
    <img src="${urlImage}" alt="">
    </div> `
}