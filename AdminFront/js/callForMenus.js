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


/*logica del boton de crear menu */
btnCrearMenu.addEventListener("click",(e) =>{
    e.preventDefault();
  
    Swal.fire({
        title: 'estas seguro de cargar este menu?',
        text: "esta operacion es irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'confirmar',
        cancelButtonText: "cancelar"
      }).then((result) => {
        if (result.isConfirmed) {
                crearMenu();
        }
      })
  
  
     } );




/*--funciones--- */
function agregarOciones(select){

    let listaPlatos = platillos.result;
    listaPlatos.forEach(plato => {
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

            if (resultado.response.ok) {

                Swal.fire({
                    icon: 'success',
                    title: 'menu creado con exito',
                    text: `ID: ${resultado.result.id}`,
                })
                .then(() => { location.reload() });

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Ups! intenta nuevamente',
                    text: `revisa bien los datos del menu`,
                })
            }
        })

}



/*logica para mostrar el utlimo menu */

let ultimoMenu = await Menu.GetSiguiente();


let codigoMenu =  document.getElementById("codigo_menu");
let fechaConsumir = document.getElementById("date_consumo_print");
let fechaCarga = document.getElementById("date_carga_print");
let fechaCierra = document.getElementById("date_venc_print");


fechaConsumir.innerText = formatoFechaEscrita(new Date(ultimoMenu.fecha_consumo));
fechaCarga.innerText  = formatoFechaEscrita(new Date(ultimoMenu.fecha_carga),true);
fechaCierra.innerText  = formatoFechaEscrita(new Date(ultimoMenu.fecha_cierre),true);
codigoMenu.textContent = "ID: "+(ultimoMenu.id).toUpperCase();


let opcionesMenu = document.getElementById("opciones_menu_dia");
let platos = await Array.from(ultimoMenu.platillos);

platos.forEach(plato => {

    let texto = document.createElement("p");
    texto.textContent = plato.descripcion +" || quedan: "+(plato.stock-plato.pedido)+"  pedidos: "+plato.pedido;
    opcionesMenu.appendChild(texto);
})