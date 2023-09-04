import config from "../../config/config.js";

const endpointAutomatizar =  `${config.apiUrl}/Personal/automation`;

const automatizarPedido = async (automationRequest) => {

    const response = await fetch(endpointAutomatizar, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(automationRequest),
      });
  

    return response;
}
export  const Automatizacion = {
    automatizarPedido : automatizarPedido 
}