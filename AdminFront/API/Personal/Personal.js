import config from "../../config/config.js";

const api = config.apiUrl;
const enpointPersonal = `${api}/api/Personal`;

const crearPersonal = async (personalRequest) => {
  const response = await fetch(enpointPersonal, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(personalRequest),
  });

  const result = await response.json();

  return {
    response,
    result,
  };
};

export const Personal = {
  Post: crearPersonal
};
