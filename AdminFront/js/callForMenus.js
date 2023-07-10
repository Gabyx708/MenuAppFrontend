import { navBar } from "../components/navBar/navBar.js";
import { Platillo } from "../API/Platillo/Platillo.js";
import {Menu} from "../API/Menu/Menu.js"
import formatoFecha from "../utils/formatoFecha.js";
import formatoFechaEscrita from "../utils/formatoFechaEscrita.js";

navBar.getNavbar();


/*logica del formulario de creacion de menu*/
let $selects = [];
let $stock = [];
let platillos = await Platillo.Get();
let btnCrearMenu = document.getElementsByTagName("button")[0];

$selects = document.getElementsByClassName('opciones-select');
$stock = document.getElementsByName('stock');
const formularioContainer = document.getElementById("form-container");

for (let i = 0; i < $selects.length; i++) {
    agregarOciones($selects[i]);
    
}


btnCrearMenu.addEventListener("click",(e) =>{
    e.preventDefault();
    crearMenu()});

function agregarOciones(select){

    platillos.forEach(plato => {
        const option = document.createElement('option');
        const valor = plato.id;
        option.value = valor;
        option.text = plato.descripcion;
       select.appendChild(option);
    });
}


function crearMenu(){

    let fechaConsumo = document.getElementById("date_consumo").value;
    let fechaVencimiento = document.getElementById("date_venc").value;
    let menuPlatillos = [];

    for (let i = 0; i < $selects.length; i++) {
        
       let idPlatillo = $selects[i].value;
       let stockPlatillo = $stock[i].value;

       const MenuPlatilloRequest = {
            id : idPlatillo,
            stock : stockPlatillo
       }
        
       menuPlatillos.push(MenuPlatilloRequest);
    }

    const menuRequest = {
        fecha_consumo : fechaConsumo,
        fecha_cierre : fechaVencimiento,
        platillosDelMenu : menuPlatillos
    }


    Menu.crearMenu(menuRequest)
    .then(resultado => {
        alert("se ah creado el menu!: "+resultado.id);
        formularioContainer.innerHTML = cardMenu(resultado);
    })
    
}



/*logica para mostrar el utlimo menu */

let ultimoMenu = await Menu.GetSiguiente();


let codigoMenu =  document.getElementById("codigo_menu");
let fechaConsumir = document.getElementById("date_consumo_print");
let fechaCarga = document.getElementById("date_carga_print");
let fechaCierra = document.getElementById("date_venc_print");

console.log(await ultimoMenu)

fechaConsumir.innerText = formatoFechaEscrita(new Date(ultimoMenu.fecha_consumo));
fechaCarga.innerText  = formatoFechaEscrita(new Date(ultimoMenu.fecha_carga));
fechaCierra.innerText  = formatoFechaEscrita(new Date(ultimoMenu.fecha_cierre),true);
codigoMenu.textContent = "ID: "+(ultimoMenu.id).toUpperCase();


let opcionesMenu = document.getElementById("opciones_menu_dia");
let platos = await Array.from(ultimoMenu.platillos);
console.log(platos)

platos.forEach(plato => {

    let texto = document.createElement("p");
    texto.textContent = plato.descripcion +"\n disponibles: "+plato.stock+"\npedidos: "+plato.pedido;
    opcionesMenu.appendChild(texto);
    console.log(plato)
})