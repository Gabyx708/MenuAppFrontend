export default function formatoFechaEscrita(date, time) {
    let fecha = new Date(date);

    const MESES = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
    ];
    
    const DIAS = [
        "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
    ];

    let dia = fecha.getDay();
    let diaMes = fecha.getDate();
    let month = fecha.getMonth();
    let year = fecha.getFullYear();

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();

    if (time == true) {
        return `${DIAS[dia]} ${diaMes} DE ${MESES[month]} a las ${hora}:${minutos} hs`.toUpperCase();
    }

    return `${DIAS[dia]} ${diaMes} DE ${MESES[month]}`.toUpperCase();
}
