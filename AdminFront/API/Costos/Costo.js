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

const obtenerCostoPeriodo = async (fechaInicio, fechaFin) => {

  const peticion = `${enpointCostos}/periodo?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;

  const response = await fetch(peticion);

  const result = await response.json();

  return {
    response,
    result
  };
}

const obtenerCostoEmpleado = async (idEmpleado,fechaInicio, fechaFin) => {

  const peticion = `${enpointCostos}/personal?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}&idPersonal=${idEmpleado}`;

  const response = await fetch(peticion);

  const result = await response.json();

  return {
    response,
    result
  };
}

export const Costos = {
    obtenerCostoDelDia : obtenerCostoDelDia,
    obtenerCostoPeriodo : obtenerCostoPeriodo,
    obtenerCostoEmpleado : obtenerCostoEmpleado
}