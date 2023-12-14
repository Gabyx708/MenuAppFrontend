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