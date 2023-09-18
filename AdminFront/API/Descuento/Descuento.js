import config from "../../config/config.js";

const api = config.apiUrl;
const enpointDescuento = `${api}/Descuento`;

const crearDescuento = async (descuentoRequest) => {

    let result;
    const response = await fetch(enpointDescuento, {
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

const conseguirDescuentoVigente = async () => {

    let result;

    const response = await fetch(enpointPlatillo);
    
      if (!response.ok) {
        throw new Error();
      }

      if(response.ok){
        result = await response.json();
      }
  
      return result;

};


export const Descuento = {

    Post : crearDescuento ,
    Get : conseguirDescuentoVigente
};