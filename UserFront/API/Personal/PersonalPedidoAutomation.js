import config from "../../config/config.js";
import { getToken } from "../../JS/services/autenticationService.js";

const token = getToken();

const endpointAutomatizar =  `${config.apiUrl}/Personal/automation`;

const automatizarPedido = async (automationRequest) => {

    const response = await fetch(endpointAutomatizar, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(automationRequest),
      });
      
      let result = await response.json();

    return { response , result};
}
export  const Automatizacion = {
    automatizarPedido : automatizarPedido 
}