export default function alertaGenerica(icon,title,text) 
{  
    return Swal.fire({
        icon: icon,
        title: title,
        text: text,
      })
}