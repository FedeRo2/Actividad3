// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()



function validarDatos() {
  if(formconsultas.nombre.value ==0) {
    alert ('completa el nombre minimo 3 caracteres')
    formconsultas.nombre.value ='';
    formconsultas.nombre.focus();
    return false;

  }

   else if(formconsultas.apellido.value ==0) {
    alert ('completa el apellido minimo 3 caracteres')
    formconsultas.apellido.value ='';
    formconsultas.apellido.focus();
    return false;

  }
  

  else { alert("Recibimos tu Consulta");

}


  
}


