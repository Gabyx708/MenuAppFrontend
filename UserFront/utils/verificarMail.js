export default function isValidEmail(email) {
    // Expresión regular para validar el formato de un correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Verificar si el correo electrónico cumple con el formato
    return emailRegex.test(email);
  }
  