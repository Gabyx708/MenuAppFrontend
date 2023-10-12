import { navBar } from "../../components/navBar/navBar.js";
import { Platillo } from "../../API/Platillo/Platillo.js";
import {Menu} from "../../API/Menu/Menu.js"
import formatoFecha from "../../utils/formatoFecha.js";
import formatoFechaEscrita from "../../utils/formatoFechaEscrita.js";

await navBar.getNavbar();

let platillos = await Platillo.Get();

const btnAgregarOpcion = document.getElementById("btnAgregarOpcion");
const btnEliminarOpcion = document.getElementById("btnEliminarOpcion");
let article = document.getElementById("contendor_opciones_plato")

btnAgregarOpcion.addEventListener("click",(e)=> {
    e.preventDefault();
    agregarOpcionesAlMenu();
})

btnEliminarOpcion.addEventListener("click",(e)=> {
    e.preventDefault();
    eliminarUltimaOpcion();
})
/*logica del formulario de creacion de menu*/
let $selects = [];
let $stock = [];

let btnCrearMenu = document.getElementById("btnCrearMenu");

$selects = document.getElementsByClassName('opcion_menu');

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
    listaPlatos.sort((a, b) => a.descripcion.localeCompare(b.descripcion));

    listaPlatos.forEach(plato => {
        const label = document.createElement("label");
        const option = document.createElement('option');
        option.text = ` ${plato.descripcion}`;
        option.value = ` ${plato.descripcion}`;
        label.textContent =  ` ($${plato.precio})`;
        select.appendChild(option);
        option.appendChild(label);
        //TODO arreglar atributo value
    });
}


function crearMenu(){

    $stock = document.getElementsByClassName('stock');
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

    console.log(menuRequest)

 /*  // Mostrar la animación de carga antes de hacer la solicitud
Swal.fire({
    title: 'creando menu , aguarda...',
    text: "(espera hasta que terminemos)",
    allowOutsideClick: false, // Evita que el usuario cierre la alerta
    showConfirmButton: false,
    onBeforeOpen: () => {
        Swal.showLoading();
    }
});

// Realizar la solicitud
Menu.crearMenu(menuRequest)
    .then(resultado => {
        if (resultado.response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Menú creado con éxito',
                text: `ID: ${resultado.result.id}`,
            }).then(() => {
                location.reload();
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Ups! Intenta nuevamente',
                text: 'Revisa bien los datos del menú',
            });
        }
    });

*/
}

function agregarOpcionesAlMenu(){
    

    let listaPlatos = platillos.result;
    listaPlatos.sort((a, b) => a.descripcion.localeCompare(b.descripcion));

    const div = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = "OPCION: ";
        const select = document.createElement("select");
        select.classList.add("opcion_menu")
        select.name = "comida";

        const labelNumber = document.createElement("label");
        labelNumber.textContent = "STOCK: "
        const selectNumber = document.createElement("select");
        selectNumber.classList.add("stock");
        
        for (let i = 1; i <= 30; i++) {
            let opcionNumber = document.createElement("option");
            opcionNumber.textContent = i;
            opcionNumber.value = i
            selectNumber.appendChild(opcionNumber)
        }

        
        listaPlatos.forEach(platillo => {
            const option = document.createElement("option");
            option.value = platillo.idMenuPlato;
            option.textContent = platillo.descripcion+" $"+platillo.precio;
            select.appendChild(option);
        })

        
        div.appendChild(label);
        div.appendChild(select);

        div.appendChild(labelNumber)
        div.appendChild(selectNumber)
        article.appendChild(div);
}

function eliminarUltimaOpcion() {
    const divs = article.querySelectorAll("div");
    if (divs.length > 1) {
        article.removeChild(divs[divs.length - 1]);
    }
}


/*logica para mostrar el utlimo menu */

let ultimoMenu = await Menu.GetSiguiente();


function renderTablaDescripcion(menu){

    const id = document.getElementById("idDescrip");
    const fechaConsumo = document.getElementById("fechConsuDescrip")
    const fechaCarga = document.getElementById("fechaCargaDescrip")
    const fechaCierre = document.getElementById("fechaCierreDescrip")

    id.innerHTML = menu.id
    fechaConsumo.innerHTML = formatoFechaEscrita(menu.fecha_consumo)
    fechaCarga.innerHTML = formatoFechaEscrita(menu.fecha_carga,true)
    fechaCierre.innerHTML = formatoFechaEscrita(menu.fecha_cierre,true)
}

renderTablaDescripcion(ultimoMenu);

let opcionesMenu = document.getElementById("opciones_menu_dia");
let platos = await Array.from(ultimoMenu.platillos);

platos.forEach(plato => {


    let fila = document.createElement("tr");
    opcionesMenu.appendChild(fila);

    let descripcion = document.createElement("td");
    let pedidos = document.createElement("td");
    let quedan = document.createElement("td");
    let total = document.createElement("td");
    let precio = document.createElement("td");

    descripcion.textContent = plato.descripcion
    pedidos.textContent = `${plato.pedido}`
    quedan.textContent = `${plato.stock - plato.pedido}`
    total.textContent = plato.stock
    precio.textContent = "$ "+plato.precio

    fila.appendChild(descripcion)
    fila.appendChild(pedidos)
    fila.appendChild(quedan)
    fila.appendChild(total)
    fila.appendChild(precio)

})

