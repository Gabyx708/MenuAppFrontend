import config from "../../config/config.js";
import { Costos } from "../Costos/Costo.js";
import { getToken } from "../../js/services/autenticationService.js";

const token = getToken();
const api = config.apiUrl;
const enpointPersonal = `${api}/Personal`;

const crearPersonal = async (personalRequest) => {
  const response = await fetch(enpointPersonal, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(personalRequest),
  });

  const result = await response.json();

  return {
    response,
    result,
  };
};

const getAllPersonal = async ()=>{

  const response = await fetch(enpointPersonal,{
    headers : {"Authorization": `Bearer ${token}`}
  });
  const result = await response.json();

  return {
    response,
    result,
  };
}

export const Personal = {
  Post: crearPersonal,
  GetAll : getAllPersonal
};
