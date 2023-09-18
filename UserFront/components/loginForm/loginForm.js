import { agregarEstilo } from "../../utils/agregarEstilos.js";
import { Login } from "../../API/Personal/PersonalLogin.js";

const bodyHtml = document.getElementsByTagName("body")[0];

async function getLoginForm(){

    const response = await fetch('/components/loginForm/loginForm.html');
    const formulario = await response.text();
    bodyHtml.innerHTML += formulario;

    agregarEstilo('/components/loginForm/loginForm.css');
    logicarFormulario();

};


function logicarFormulario() {
  const loginForm = document.querySelector('form');
  const submitButton = document.querySelector('.submit-button');
  const spinner = document.querySelector('.spinner');

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('input[name="usuario"]').value;
    const password = document.querySelector('input[name="password"]').value;

    const loginRequest = {
      username: username,
      password: password
    };

    // Mostrar el spinner y deshabilitar el botón
    spinner.classList.remove('hidden');
    submitButton.disabled = true;
    

    try {
        const responseData = await Login.Loguerse(loginRequest)

        if(responseData.status == 401){

            Swal.fire(
                'usuario y/o contraseña incorrecta',
                'revisa bien estos datos',
                'question'
              )

              spinner.classList.add('hidden');
              submitButton.disabled = false;

        };

        if (responseData.ok) {

            console.log(responseData);
            window.location.replace("/pages/home.html");
        }

    } catch (error) {
        console.error('Error encontrado:', error);
        
        Swal.fire({
            imageUrl: '/assets/images/engranes.gif',
            title: 'el servidor no responde',
            imageWidth: 200,
            imageHeight: 200
        })

         // Ocultar el spinner y habilitar el botón nuevamente
         spinner.classList.add('hidden');
         submitButton.disabled = false;
    }
  });
}



export const FormLogin = {
    formularioLogin : getLoginForm
}
