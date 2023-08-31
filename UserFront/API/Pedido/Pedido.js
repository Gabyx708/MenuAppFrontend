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

    let cantPedidos = 7
    let enpoint = `${enpointPedido}s?idPersonal=${idUsuario}&cantidad=${cantPedidos}`;
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
    return response;
  }

  if(response.ok){
    result = await response.json();
  }

  return result;


}

const borrarPedido = async (id) =>{

  const enpointEliminar = enpointPedido+"/"+id;

  const response = await fetch(enpointEliminar, {
    method: "DELETE"});

    if (!response.ok) {
      return response;
    }


    if(response.ok){
        return response;
    }

    return response;
}

const ultimoPedido = async () => {

  let idUsuario = JSON.parse(sessionStorage.getItem("user")).id;
  let enpoint = `${enpointPedido}s?idPersonal=${idUsuario}&cantidad=${1}`;
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
    GetById : conseguirPedido,
    borrarPedido : borrarPedido,
    ultimoPedido : ultimoPedido
}