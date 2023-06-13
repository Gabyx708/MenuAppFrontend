import { Platillo } from "../services/platillo.js";

export default function cardMenu(menuData){

    let platillosMenu = menuData.platillos;
    let platoData = [];
    console.log(platillosMenu);
    console.log("original --------------------------------------");

    platillosMenu.forEach( async (plato) => {
        let id = plato.id;
        let descripcion = await conseguirDescripcion(id);
        plato.descripcion = descripcion;
        platoData.push(plato);
    });

    

       console.log(platoData);

       let platillosImprimir = platoData.map(p => `<tr><th scope="row">${p.id}</th><td>$${p.descripcion}</td><td>${p.stock}</td><td>$${p.precio}</td></tr>`).join('');
    
    return (
        '<div class="card tarjetaComanda">' +
        '<div class="card-body">' +
        '<span class="label-comanda">codigo: '+menuData.id+'</span>'+
          '<span class="label-comanda">fecha: '+menuData.fecha_consumo+'</span>'+
          '<span class="label-comanda">entrega: '+menuData.fecha_carga+'</span>'+
          '<span class="label-comanda">entrega: '+menuData.fecha_cierre+'</span>'+
          '<table class="table table-bordered">'+
          '<thead><tr><th scope="col">codigo interno</th><th scope="col">stock</th><th scope="col">precio</th></tr></thead>'+
          '<tbody class="table-group-divider">'+platillosImprimir+
          '</tbody></table>'+
        '</div>' +
      '</div>'
      )
}


const conseguirDescripcion = async(idPlato)=>{

    let platilloResponse = await Platillo.Get(idPlato);
    return platilloResponse.descripcion;
}