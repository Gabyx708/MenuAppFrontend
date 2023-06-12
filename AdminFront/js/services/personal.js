import config from "../../config/config.js";

const api = config.apiUrl;
const enpointPersonal = `${api}/api/Personal`;

const crearPersonal = async (personalRequest) =>{

    let result;

    const response = await fetch(enpointPersonal, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(personalRequest),
      });
  
      if (!response.ok) {
        throw new Error();
      }

      if(response.ok){
        result = await response.json();
      }
      
      return result; 
};


export const Personal = {
    Post : crearPersonal
}