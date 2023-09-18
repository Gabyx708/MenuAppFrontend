import config from "../../config/config.js";

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
        let userData = await response.json();
        sessionStorage.setItem("user", JSON.stringify(userData));
      }
  
      return response;
};

const changePassword = async (id,PersonalPaswordRequest) => {

  const endpointPassword = `${config.apiUrl}/Personal/password/${id}`;

  const response = await fetch(endpointPassword, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(PersonalPaswordRequest),
  });

  return response;

}

export const Login = {

    Loguerse : loguearUsuario,
    changePassword : changePassword
}