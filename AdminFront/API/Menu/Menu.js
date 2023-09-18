import config from "../../config/config.js";
import formatoFecha from "../../utils/formatoFecha.js";

const enpointMenuFecha =  `${config.apiUrl}/Menu/fecha`;
const enpointMenu = `${config.apiUrl}/Menu`;

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


const crearMenu = async (menuRequest) => {
  const response = await fetch(enpointMenu, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(menuRequest),
  });

  const result = await response.json();

  return {
    response,
    result
  };
};



export const Menu = {
    GetSiguiente : conseguirSiguienteMenu,
    crearMenu : crearMenu
}