import config from "../../config/config.js";
import formatoFecha from "../../utils/formatoFecha.js";

const enpointMenuFecha =  `${config.apiUrl}/api/Menu/fecha`;

const conseguirSiguienteMenu = async () => {

    let result = null;
    let hoy = new Date();
    let manana = hoy.getDate()+1;
    
    let fecha = new Date(hoy.getFullYear(),hoy.getMonth(),manana);
    
    const response = await fetch(enpointMenuFecha+"/"+formatoFecha(fecha));
    
    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      result = await response.json();
    }

    return result;
};


const crearMenu = async (menuRequest) =>{

  let result;
  const response = await fetch(enpointMenu, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(menuRequest),
    });

    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      result = await response.json();
    }
    
    return result; 
};


export const Menu = {
    GetSiguiente : conseguirSiguienteMenu,
    crearMenu : crearMenu
}