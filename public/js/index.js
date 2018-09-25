
var datos = {};
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function activeModalFormulario(isActive) {
  if(isActive){
    $('#modalFormulario').addClass('is-active');
  }
  else
    $('#modalFormulario').removeClass('is-active');
}

function activeModalEnviado(isActive) {
  if(isActive){
    $('#modalEnviado').addClass('is-active');
  }
  else
    $('#modalEnviado').removeClass('is-active');
}

function setError(fieldName, error = false) {
  if(error) {
    if(typeof error !== 'string')
      throw 'El erro debe ser un texto';

    $('#feed-' + fieldName).text(error);
    $('#feed-' + fieldName).show();
    $('#txt-' + fieldName).addClass('is-danger');
  }
  else {
    $('#feed-' + fieldName).text('');
    $('#feed-' + fieldName).hide();
    $('#txt-' + fieldName).removeClass('is-danger');
  }
}

/*Validaciones*/
  function validateNombre() {
    var name = $('#txt-name').val().trim();
    if(name == '') {
      setError('name', 'Por favor ingresa tu nombre');
      return false;
    }
    setError('name');
    return true;
  }

  function validateEmail() {
    var email = $('#txt-mail').val().trim();
    if(email == '') {
      setError('mail', 'Por favor ingresa un correo electrónico');
      return false;
    }
    else if(!emailRegex.test(email)) {
      setError('mail', 'Por favor ingresa un correo electrónico válido');
      return false;
    }
    setError('mail');
    return true;
  }

  $('#txt-name').blur(validateNombre);
  $('#txt-mail').blur(validateEmail);
/*Validaciones FIN*/

$('#btnSolicitar').click(function() {
  if(validateNombre() && validateEmail()) {
    datos = {
      name: $('#txt-name').val(),
      phone: $('#txt-phone').val(),
      mail: $('#txt-mail').val(),
      message: $('#txt-message').val()
    };


    $('#txt-name').val('');
    $('#txt-phone').val('');
    $('#txt-mail').val('');
    $('#txt-message').val('');

    $('.feed').hide();

    activeModalFormulario(false);
    activeModalEnviado(true);
  }
});

//Carousel
window.onload = function() {
  console.log('On load');
  var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances
}

//NavBar
document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }
});