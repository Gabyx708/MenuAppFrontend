import config from "../../config/config.js";

const api = config.apiUrl;
let enpointPlatillo = `${api}/api/Platillo`;

const crearPlatillo = async (platilloRequest) =>{


    const response = await fetch(enpointPlatillo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(platilloRequest),
      });
  
    
      const result = await response.json();
  
      return {
        response,
        result,
      };
};

const getPlatillo = async (id)=>{


    if(id != null){
      enpointPlatillo =  enpointPlatillo+"/"+id;
    }

    const response = await fetch(enpointPlatillo);
    
    const result = await response.json();

    return {
      response,
      result,
    };
}

export const Platillo = {
    Post : crearPlatillo,
    Get : getPlatillo
}