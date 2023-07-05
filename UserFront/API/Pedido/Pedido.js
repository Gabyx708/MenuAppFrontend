import config from "../../config/config.js";

const enpointPedido =  `${config.apiUrl}/api/Pedido`;

const hacerUnPedido = async (pedidoRequest) => {

    const response = await fetch(enpointPedido, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedidoRequest),
      });
  

      if (!response.ok) {
        throw new Error();
      }
  
      if(response.ok){
        let pedidoResponse = await response.json();
        return pedidoResponse;
      }

      return response;
};

const conseguirUltimo = async (idUsuario) => {

    let enpoint = `${enpointPedido}?idPersonal=${idUsuario}&cantidad=${7}`;
    let result;
    const response = await fetch(enpoint);
    
    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      result = await response.json();
    }

    return result;

}

const conseguirPedido = async (idPedido) => {

  let enpoint = enpointPedido+"/"+idPedido;
  let result;
  const response = await fetch(enpoint);
  
  if (!response.ok) {
    throw new Error();
  }

  if(response.ok){
    result = await response.json();
  }

  return result;


}

export const Pedido = {

    hacerUnPedido : hacerUnPedido,
    ultimosPedidos : conseguirUltimo,
    GetById : conseguirPedido
}