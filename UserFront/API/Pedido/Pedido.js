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

export const Pedido = {

    hacerUnPedido : hacerUnPedido
}