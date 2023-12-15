import config from "../../config/config.js"

const API_URL = config.API_AUTOMATION
const enpointPreferencia = `${API_URL}/preferencia`

export const getPreferenciasUsuario = async (idUsuario) => {

    const enpoint = `${enpointPreferencia}/${idUsuario}`

    const response = await fetch(enpoint)
    const result = await response.json();

    return {
        response,
        result
    }
}

export const crearPreferenciasUsuario = async (preferenciaRequest) => {

    const enpoint = enpointPreferencia
    const data = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(preferenciaRequest),
      }

      const response = await fetch(enpoint,data);
      const result = await response.json();

      return{
        response,
        result
      }
}

export const cambiarEstadoPreferencia = async (id) =>{

    const enpoint = enpointPreferencia+"/automation/"+id

    const response = await fetch(enpoint,{method: "PATCH"});
    const result = await response.json();

    return{
        response,
        result
    }
}

export const borrarPreferencias = async (idUsuario) => {

    const enpoint = `${enpointPreferencia}/${idUsuario}`

    const response = await fetch(enpoint,{method: "DELETE"});
    const result = await response.json();

    return{
        response,
        result
    }
}