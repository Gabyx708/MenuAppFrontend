import config from "../../config/config.js";

const api = config.apiUrl;
const enpointPlatillo = `${api}/Platillo`;

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

  let enpoint;

    if(id != null){
      enpoint =  enpointPlatillo+"/"+id;
    }else{
      enpoint =  enpointPlatillo+"s";
    }

    const response = await fetch(enpoint);
    
    const result = await response.json();

    return {
      response,
      result,
    };
}

const alterarPrecioAll = async (precio) => {

  let enpoint = enpointPlatillo+"s?nuevoPrecio="+precio;

  const response = await fetch(enpoint,{method: "PATCH"});

  const result = await response;

  return result;

}

export const Platillo = {
    Post : crearPlatillo,
    Get : getPlatillo,
    alterarPrecioAll : alterarPrecioAll
}