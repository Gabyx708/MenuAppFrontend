import config from "../../config/config.js";
import { saveToken } from "../../JS/services/autenticationService.js";
import { getToken } from "../../JS/services/autenticationService.js";

const endpointLogin =  `${config.apiUrl}/Personal/login`;

const loguearUsuario = async (UsuarioLoginRequest) => {

    const response = await fetch(endpointLogin, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(UsuarioLoginRequest),
      });

      if (!response.ok) {
        return response;
      }

      if(response.ok){
        let responsePayload = await response.json();
        let userData = responsePayload
        saveToken(userData.token)
        await getUserData(userData.id,userData.token)
      }

      return response;
};

const changePassword = async (id,PersonalPaswordRequest) => {

  const endpointPassword = `${config.apiUrl}/Personal/password/${id}`;

  const response = await fetch(endpointPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${getToken()}`
    },
    body: JSON.stringify(PersonalPaswordRequest),
  });

  return response;

}

const getUserData = async (id,token) => {

  const endpointUsuario = `${config.apiUrl}/Personal/${id}`;

  const response = await fetch(endpointUsuario, {
    headers: { "Authorization": `Bearer ${token}` },
  });
  

  if(response.ok){
    let data = await response.json();
     sessionStorage.setItem("user",JSON.stringify(data));
     return data;
  }
    
  return response;
}


export const Login = {

    Loguerse : loguearUsuario,
    changePassword : changePassword
}