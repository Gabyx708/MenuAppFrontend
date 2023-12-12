import config from "../../config/config.js";

const API = config.api_auto;

const obtenerTodasLasCategorias = async () => {

    const url = `${API}/categoria`;

    const response = await fetch(url);
    const result = await response.json();
    
    return {
        response,
        result
      };
}

export const Categoria = {
    obtenerTodasLasCategorias : obtenerTodasLasCategorias
}