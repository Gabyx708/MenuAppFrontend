export const alertaProblema = (message) => {
    
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'ocurrio un problema'
      })
}