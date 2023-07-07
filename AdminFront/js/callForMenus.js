import { navBar } from "../components/navBar/navBar.js";
import { Platillo } from "../API/Platillo/Platillo.js";
import {Menu} from "../API/Menu/Menu.js"

navBar.getNavbar();


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