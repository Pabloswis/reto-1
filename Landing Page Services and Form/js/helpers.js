export function isValidEmail(email) {
  // Expresión regular para validar un correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidName(name) {
  // Validar que el nombre no contenga números
  return !/\d/.test(name);
}
export function isCheckedTerms(terms) {
  // Validar que los términos estén marcados
  return terms === true;  
}

