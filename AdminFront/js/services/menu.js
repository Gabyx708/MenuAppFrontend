import config from "../../config/config.js";

const api = config.apiUrl;
const enpointMenu = `${api}/api/Menu`;

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
    Post : crearMenu
}