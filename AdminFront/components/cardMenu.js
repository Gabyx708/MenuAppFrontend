import { Platillo } from "../services/platillo.js";

export default function cardMenu(menuData){

    let platillosMenu = menuData.platillos;
    let platoData = [];
    console.log(platillosMenu);


    

       console.log(platoData);

       let platillosImprimir = platillosMenu.map(p => `<tr><th scope="row">${p.id}</th><td>${p.descripcion}</td><td>${p.stock}</td><td>$${p.precio}</td></tr>`).join('');
    
    return (
        '<div class="card ">' +
        '<h2>Menu</h2><hr>'+
        '<div class="card-body">' +
        '<div class="info-container"><span class="label-menu bg-warning">codigo: '+menuData.id+'</span>'+
          '<span class="label-menu  bg-warning">fecha consumo: '+menuData.fecha_consumo+'</span>'+
          '<span class="label-menu  bg-warning">fecha de carga: '+menuData.fecha_carga+'</span>'+
          '<span class="label-menu  bg-warning">fecha de cierre: '+menuData.fecha_cierre+'</span> </div>'+
          '<table class="table table-bordered">'+
          '<thead><tr><th scope="col">codigo interno</th><th scope="col">descripcion</th><th scope="col">stock</th><th scope="col">precio</th></tr></thead>'+
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