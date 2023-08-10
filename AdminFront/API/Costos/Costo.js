import config from "../../config/config.js";

const api = config.apiUrl;
const enpointCostos = `${api}/api/Costo`;

const obtenerCostoDelDia = async (fecha) =>{

    const peticion = `${enpointCostos}?fecha=${fecha}`;
    const response = await fetch(peticion);
    
      const result = await response.json();
    
      return {
        response,
        result
      };
} 


export const Costos = {
    obtenerCostoDelDia : obtenerCostoDelDia
}