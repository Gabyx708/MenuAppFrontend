import config from "../../config/config.js";
import formatoFecha from "../../utils/formatoFecha.js";

const enpointMenuFecha =  `${config.apiUrl}/api/Menu/fecha`;
const enpointMenu = `${config.apiUrl}/api/Menu`;

const conseguirSiguienteMenu = async () => {

    const response = await fetch(enpointMenu);
    let result;
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