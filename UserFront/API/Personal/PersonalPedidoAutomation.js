import config from "../../config/config.js";

const endpointAutomatizar =  `${config.apiUrl}/Personal/automation`;

const automatizarPedido = async (automationRequest) => {

    const response = await fetch("https://localhost:7135/api/v1.2/Personal/automation", {
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