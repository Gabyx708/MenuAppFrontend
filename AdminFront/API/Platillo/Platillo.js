import config from "../../config/config.js";

const api = config.apiUrl;
let enpointPlatillo = `${api}/api/Platillo`;

const crearPlatillo = async (platilloRequest) =>{

  let result = [];

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

      if(response.ok){
        result.response =  response;
        result.data = await response.json();
      }
  
      return result;
};

const getPlatillo = async (id)=>{

    let result = [];

    if(id != null){
      enpointPlatillo =  enpointPlatillo+"/"+id;
    }

    const response = await fetch(enpointPlatillo);
    
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