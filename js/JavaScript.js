(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

function validarDatos() {
  if (FormularioConsultas.nombre.value.length < 3) {
    alert('Escribe tu nombre, debe tener mínimo 3 caracteres.')
    FormularioConsultas.nombre.value = '';
    FormularioConsultas.nombre.focus();
    return false;
  } else if (FormularioConsultas.apellido.value.length < 3) {
    alert('Escribe tu apellido, debe tener mínimo 3 caracteres.')
    FormularioConsultas.apellido.value = '';
    FormularioConsultas.apellido.focus();
    return false;
  } else if (FormularioConsultas.email.value.length === 0) {
    alert('Escribe tu email, debe ser un e-mail válido.')
    FormularioConsultas.email.value = '';
    FormularioConsultas.email.focus();
    return false;
  } else if (FormularioConsultas.consulta.value.length === 0 || FormularioConsultas.consulta.value.length < 15) {
    alert('Escribe tu consulta, debe tener mínimo 15 caracteres.');
    FormularioConsultas.consulta.value = '';
    FormularioConsultas.consulta.focus();
    return false;
  }

  return true;
}

function mOver(obj) {
  obj.innerHTML = "¡Date un gusto!"
}

function mOut(obj) {
  obj.innerHTML = "Ver Productos"
}