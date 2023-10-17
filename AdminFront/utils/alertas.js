export const alertaProblema = async (response) => {
    const res = await response.json()
    const mensaje = res.message
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `ocurrio un problema: ${mensaje}`
      })
}