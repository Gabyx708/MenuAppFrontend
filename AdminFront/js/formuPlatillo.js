import { Platillo } from "./services/platillo.js";

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

  } else {
    try {
      const responseData = await Platillo.Post(platilloRequest);
      // Procesar la respuesta aquí
      if (responseData.ok) {
        console.log(responseData);
        alert("Platillo agregado!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("revisa los datos de nuevo");
    }
  }

});
