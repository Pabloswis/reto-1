import { isValidEmail, isCheckedTerms, isValidName } from './helpers.js'

// Constantes
const ERROR_NAME_ID = 'error-name';
const ERROR_EMAIL_ID = 'error-email';
const ERROR_TERM_ID = 'error-term';

// Obtener referencias a los elementos del formulario
const inputName = document.getElementById('inputName')
const inputEmail = document.getElementById('inputEmail')
const checkTerm = document.getElementById('checkTerm')
const buttonRegister = document.getElementById('btn-register')

let dataForm = { name: '', email: '', terms: false }


// Manejadores de eventos
buttonRegister.setAttribute('disabled', true)
inputName.addEventListener('input', validation);
inputEmail.addEventListener('input', validation);
checkTerm.addEventListener('click', validation);


function enableDisableButton() {
  // Habilitar o deshabilitar el botón según las validaciones
  const isValid = isValidName(dataForm.name) && isValidEmail(dataForm.email) && isCheckedTerms(dataForm.terms);
  buttonRegister.disabled = !isValid;
}
function validation(event) {
  const { name, value, type, checked } = event.target;
  // Actualizar el objeto dataForm con los valores actuales
  dataForm[name] = type === 'checkbox' ? checked : value;

  if (name === 'name') {
    let errorMessge = document.getElementById(ERROR_NAME_ID)
    if (isValidName(value)) {
      errorMessge.setAttribute('hidden', true)
      dataForm.name = value
      enableDisableButton()
    } else {
      errorMessge.innerHTML = 'El nombre no puede contener números'
      errorMessge.removeAttribute('hidden')
      enableDisableButton()
    }
  }
  if (name === 'email') {
    let errorMessge = document.getElementById(ERROR_EMAIL_ID)
    if (isValidEmail(value)) {
      errorMessge.setAttribute('hidden', true)
      dataForm.email = value
      enableDisableButton()
    } else {
      errorMessge.innerHTML = 'El mail es inválido'
      errorMessge.removeAttribute('hidden')
      enableDisableButton()
    }
  }
  if (type === 'checkbox') {
    let errorMessge = document.getElementById(ERROR_TERM_ID)
    if (checked) {
      errorMessge.setAttribute('hidden', true)
      dataForm.terms = checked
      enableDisableButton()
    } else {
      errorMessge.innerHTML = 'Debe aceptar los terminos y condiciones para registrarse'
      errorMessge.removeAttribute('hidden')
      dataForm.terms = checked
      enableDisableButton()
    }
  }
}

// También puedes agregar un evento 'click' al botón para realizar acciones adicionales al hacer clic.
buttonRegister.addEventListener('click', function () {
    //enviar el mail para recoleccion de leads
  alert(`¡Felicidades ${dataForm.name}!\nPronto recibiras informacion en tu mail`);
});