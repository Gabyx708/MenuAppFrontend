export default function formatoFechaEscrita(date,time) {

    let fecha = new Date(date);

    const MESES = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
      ];
    
      const DIAS = [
            "Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"
      ];


    let dia = (fecha.getDay() - 1 + 7) % 7;
    let diaMes = fecha.getDate();
    let month = fecha.getMonth();
    let year = fecha.getFullYear()

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    if(time == true){
        return `${DIAS[dia]} ${diaMes} DE ${MESES[month]} a las ${hora}:${minutos} hs`.toUpperCase();
    }

    return `${DIAS[dia]} ${diaMes} DE ${MESES[month]}`.toUpperCase();
    
}