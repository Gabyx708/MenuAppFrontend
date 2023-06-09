import config from "../../config/config.js";

const api = config.apiUrl;
const enpointPlatillo = `${api}/api/Platillo`;

const crearPlatillo = async (platilloRequest) =>{

    const response = await fetch(enpointPlatillo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(platilloRequest),
      });
  
      if (!response.ok) {
        throw new Error();
      }
  
      return response;
};

const getPlatillo = async ()=>{

    let result = [];

    let response = await fetch(enpointPlatillo);
    
      if (!response.ok) {
        throw new Error();
      }

      if(response.ok){
        result = await response.json();
      }
  
      return result;
}


export const Platillo = {
    Post : crearPlatillo,
    Get : getPlatillo
}