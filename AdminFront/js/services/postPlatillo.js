import config from "../../config/config.js";

const api = config.apiUrl;
const enpointPlatillo = `${api}/api/Platillo`;

// Agregar un evento de escucha al formulario para manejar el envío
const platilloForm = document.querySelector('form');
platilloForm.addEventListener('submit', async (event) => {
event.preventDefault(); // Evita el envío del formulario por defecto


const descripcion = document.querySelector('input[name="descripcion"]').value;
const precio = document.querySelector('input[name="precio"]').value;


const platilloRequest = {
    descripcion: descripcion,
    precio: precio
};

try {
    const responseData = await crearPlatillo(platilloRequest);
    // Procesar la respuesta aquí  
    if(responseData.ok){
      console.log(responseData);
        alert("Platillo agregado!");
    } 
  } catch (error) {
    console.error('Error:', error);
  }
});


const crearPlatillo = async (platilloRequest) =>{

    const response = await fetch(enpointPlatillo, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(platilloRequest),
      });
  
      if (!response.ok) {
        throw new Error();
      }
  
      return response;
};
