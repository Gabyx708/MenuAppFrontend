export default function cerrarSesion(){

    sessionStorage.clear();
    location.href = "/index.html";
}