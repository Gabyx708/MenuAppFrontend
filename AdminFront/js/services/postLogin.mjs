import config from "../../config/config.js";

const api = config.apiUrl;
const enpointLogin = `${api}/api/Personal/login`;
let userData = null;

// Agregar un evento de escucha al formulario para manejar el envío
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', async (event) => {
event.preventDefault(); // Evita el envío del formulario por defecto

  const username = document.querySelector('input[name="usuario"]').value;
  const password = document.querySelector('input[name="password"]').value;

  const loginRequest = {
    username: username,
    password: password
  };

  try {
    const responseData = await loguearse(loginRequest);
    // Procesar la respuesta aquí  
    if(responseData.ok){
      console.log(responseData);
        window.location.replace("/pages/home.html");
    } 
  } catch (error) {
    console.error('Error:', error);
  }
});

const loguearse = async (loginRequest) => {

    const response = await fetch(enpointLogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    });

    if (!response.ok) {
      throw new Error();
    }

    if(response.ok){
      userData = await response.json();
    }

    return response;
};
