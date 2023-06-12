import { Platillo } from "./services/platillo.js";
import cardPlatillo from "./components/cardPlatillo.js";

// Agregar un evento de escucha al formulario para manejar el envío
const platilloForm = document.querySelector("form");
platilloForm.addEventListener("submit", async (event) => {
  event.preventDefault(); // Evita el envío del formulario por defecto

  const descripcion = document.querySelector('input[name="descripcion"]').value;
  const precio = document.querySelector('input[name="precio"]').value;

  const platilloRequest = {
    descripcion: descripcion,
    precio: precio,
  };

  if (descripcion === "") {
    alert("falta la descripcion del platillo");
  }
  if(precio < 100){
    alert("el precio debe ser mayor a $100");
  }
  if(precio > 5000){
    alert("el precio debe ser menor a $5000");
  }

  else {
    try {
      const responseData = await Platillo.Post(platilloRequest);
      // Procesar la respuesta aquí
      if (responseData.response.ok) {
        const platilloCreado = responseData.data;
        console.log(platilloCreado);
        platilloForm.innerHTML = cardPlatillo(platilloCreado)
        alert("Platillo agregado!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Revisa los datos de nuevo");
    }
  }
});
