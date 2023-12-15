import config from "../../config/config.js"

const API_URL = config.API_AUTOMATION
const enpointCategoria = `${API_URL}/categoria`

export const getCategorias = async () => {

    const enpoint = enpointCategoria;

    const response = await fetch(enpoint);
    const result = await response.json();

    return {
        response,
        result
    }
}