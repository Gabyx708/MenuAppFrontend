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

const crearUnaCategoria = async (categoriaRequest) => {

    const Content = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(categoriaRequest),
      }
    

    const url = `${API}/categoria`;
    const response = await fetch(url, Content)
    const result = await response.json();

    return {
        response,
        result
      };
}

export const Categoria = {
    obtenerTodasLasCategorias : obtenerTodasLasCategorias,
    crearUnaCategoria : crearUnaCategoria
}