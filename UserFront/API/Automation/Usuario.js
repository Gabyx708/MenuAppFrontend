import config from "../../config/config.js"

const API_URL = config.API_AUTOMATION
const enpointUsuario = `${API_URL}/user`

export const crearUsuarioAutomation = async (usuarioRequest) => {

    const enpoint = enpointUsuario;

    const data = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(usuarioRequest),
      }

    const response = await fetch(enpoint,data)
    const result = await response.json();

    return {
        response,
        result
    }
}

export const getUsuarioAutomation = async (id) => {

    const enpoint = enpointUsuario+"/"+id

    const response = await fetch(enpoint)
    const result = response.json();

    return {
        response,
        result
    }
}