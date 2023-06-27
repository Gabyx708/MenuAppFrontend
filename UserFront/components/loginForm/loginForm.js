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

    //logica del formulario

    const loginForm = document.querySelector('form');

    loginForm.addEventListener('submit', async (event) => {

        event.preventDefault();

        const username = document.querySelector('input[name="usuario"]').value;
        const password = document.querySelector('input[name="password"]').value;

        const loginRequest = {

            username: username,
            password: password
        };

        try {
            const responseData = await Login.Loguerse(loginRequest)

            if (responseData.ok) {

                console.log(responseData);
                window.location.replace("/pages/home.html");
            }

        } catch (error) {
            console.error('Error:', error);
        }


    });


};


window.onload = () =>{
    getLoginForm();
};
