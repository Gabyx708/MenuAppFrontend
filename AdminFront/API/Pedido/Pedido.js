import config from "../../config/config.js";

const enpointPedido =  `${config.apiUrl}/Pedido`;

const hacerUnPedido = async (pedidoRequest) => {

    const response = await fetch(enpointPedido, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pedidoRequest),
      });
  


      if (!response.ok) {
        return response;
      }

  
      if(response.ok){
        let pedidoResponse = await response.json();
        return pedidoResponse;
      }

      return response;
};

const conseguirUltimo = async (idUsuario) => {

    let enpoint = `${config.apiUrl}/Pedidos?idPersonal=${idUsuario}&cantidad=${7}`;
    let result;

    if(idUsuario == null){
      enpoint = `${config.apiUrl}/Pedidos?cantidad=${4}`;
    }

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
    return response;
  }

  if(response.ok){
    result = await response.json();
  }

  return result;


}

const conseguirPedidosFiltrado = async (idUsuario,fechaInicio,fechaUltimo) => {

  let enpoint = `${config.apiUrl}/Pedidos?idPersonal=${idUsuario}&Desde=${fechaInicio}&Hasta=${fechaUltimo}`;
  let result;

  if(idUsuario == null){

    enpoint = `${config.apiUrl}/Pedidos?Desde=${fechaInicio}&Hasta=${fechaUltimo}`;
  }

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
    GetById : conseguirPedido,
    conseguirPedidosFiltrado : conseguirPedidosFiltrado
}