import { navBar } from "../../components/navBar/navBar.js";
import {Menu} from "../../API/Menu/Menu.js";
import {saveMenu} from "../services/menuService.js";
import {Personal} from "../../API/Personal/Personal.js";
import { Pedido } from "../../API/Pedido/Pedido.js";
import { alertaProblema } from "../../utils/alertas.js";

await navBar.getNavbar();

const empleados = await Personal.GetAll();
const menu =  await Menu.GetSiguiente();
saveMenu(JSON.stringify(menu));

agregarOpcionDePersonal();

const listaPlatillos = Array.from(menu.platillos);
const article = document.querySelector("article");
const btnAgregarOpcion = document.getElementById("btnAgregar");
const btnQuitarOpcion = document.getElementById("btnEliminar");
const btnConfirmarPedido = document.getElementById("btnHacerPedido")

btnAgregarOpcion.addEventListener("click",() => {agregarOpcion()})
btnQuitarOpcion.addEventListener("click",()=> {eliminarUltimaOpcion()})
btnConfirmarPedido.addEventListener("click",()=> {chequearConfirmacionPedido()})

    function agregarOpcion() {
        

        const div = document.createElement("div");
        const label = document.createElement("label");
        label.textContent = "OPCION: ";
        const select = document.createElement("select");
        select.classList.add("id_menu_opcion")
        select.name = "comida";

        listaPlatillos.forEach(platillo => {
            const option = document.createElement("option");
            option.value = platillo.idMenuPlato;
            option.textContent = platillo.descripcion;
            select.appendChild(option);
        })

        
        div.appendChild(label);
        div.appendChild(select);
        article.appendChild(div);
    }

    function eliminarUltimaOpcion() {
        const divs = article.querySelectorAll("div");
        if (divs.length > 1) {
            article.removeChild(divs[divs.length - 1]);
        }
    }

    function agregarOpcionDePersonal(){
        let listaPersonal = Array.from(empleados.result)
        const select = document.getElementById("opciones_persona");

        const option = document.createElement("option");
        
        listaPersonal.forEach(persona => { 
            const option = document.createElement("option");
            option.textContent = `${persona.nombre} / DNI:${persona.dni}`
            option.value = `${persona.id}`
            select.appendChild(option)
        })
    }

    function confirmarPedido() {

        let idPersonal = document.getElementById("opciones_persona").value;
        let opciones = document.getElementsByClassName("id_menu_opcion")
        let listaOpciones = Array.from(opciones)
        let listaIdOpciones = new Array();

        listaOpciones.forEach(op => {listaIdOpciones.push(op.value)})
        
        const pedidoRequest = {
            idUsuario :idPersonal,
            menuPlatillos : listaIdOpciones
        }
        
        Pedido.hacerUnPedido(pedidoRequest,alertaProblema)
      }

    function chequearConfirmacionPedido(){

        Swal.fire({
            title: 'estas seguro de agregar este pedido?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si',
            cancelButtonText: "no"
          }).then((result) => {
            if (result.isConfirmed) {

                confirmarPedido();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'pedido creado',
                showConfirmButton: false,
                timer: 1500
            })
            }
          })
    }

