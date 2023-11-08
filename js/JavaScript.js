// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
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

     function validarDatos( ) { 

    if (formularioconsultas.Nombre.value == 0) {
        alert('complete el Nombre minimo 3 caracteres');
        formularioconsultas.Nombre.value = '';
        formularioconsultas.Nombre.focus();
        return false;

    }
    else if (formularioconsultas.Apellido.value == 0) {
        alert('complete el Nombre minimo 3 caracteres');
        formularioconsultas.Apellido.value = '';
        formularioconsultas.Apellido.focus();
        return false;
    }

    else if (formularioconsultas.Mail.value == 0) {
        alert('complete el Apellido minimo 3 caracteres');
        formularioconsultas.Mail.value = '';
        formularioconsultas.Mail.focus();
        return false;
    }
    else if (formularioconsultas.Ciudad.value == 0) {
        alert('complete el Ciudad minimo 3 caracteres');
        formularioconsultas.Ciudad.value = '';
        formularioconsultas.Ciudad.focus();
        return false;
    }

    else if (formularioconsultas.CONSULTA.value == 0) {
        alert('complete el CONSULTA minimo 3 caracteres');
        formularioconsultas.CONSULTA.value = '';
        formularioconsultas.CONSULTA.focus();
        return false;

    }



   }