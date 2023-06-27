import config from "../../config/config.js";

const enpointMenuFecha =  `${config.apiUrl}/api/Menu/fecha`;

const conseguirSiguienteMenu = async () => {

    let fecha = "2023-06-27T00:00:00";

    const response = await fetch(enpointMenuFecha+"/"+fecha);
    
    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      result = await response.json();
    }

    return result;
};


export const Menu = {
    GetFecha : conseguirSiguienteMenu
}