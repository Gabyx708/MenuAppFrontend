import config from "../../config/config.js";
import formatoFecha from "../../utils/formatoFecha.js";

const enpointMenuFecha =  `${config.apiUrl}/Menu/fecha`;
const enpointMenu =  `${config.apiUrl}/Menu`;

const conseguirSiguienteMenu = async () => {

    let result = null;
    let hoy = new Date();
    let manana = hoy.getDate()+1;
    
    let fecha = new Date(hoy.getFullYear(),hoy.getMonth(),manana);
    
    const response = await fetch(enpointMenu);
    console.log(response+"jsjsjs")
    
    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      result = await response.json();
      sessionStorage.setItem("menu",JSON.stringify(result));
    }

    return result;
};


export const Menu = {
    GetSiguiente : conseguirSiguienteMenu
}