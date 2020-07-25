console.log('It works');

$(document).ready(function (){
  $('.submit').click(function (event){
    console.log('Clicked button')

    var nombre = $('.name').val()
    var telefono = $('.phone').val()
    var email = $('.email').val()
    var mensaje = $('.message').val()
    var stats = $('.status')
    stats.empty()

    if (nombre.length > 0){
      stats.append('<div style="color: green;">Nombre valido</div>');
    }else{
      stats.append('<div style="color: red;">Por favor ingrese su nombre</div>');
      event.preventDefault();
    }
    if (telefono.length > 11 && telefono.length < 15){
      stats.append('<div style="color: green;">Telefono valido</div>');
    } else{
      if (telefono.length === 0){
        stats.append('<div style="color: red;">Ingrese su numero de telefono</div>');
        event.preventDefault();
      } else{
        stats.append('<div style="color: red;">Formato de telefono invalido</div>');
        event.preventDefault();
      }
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')){
      stats.append('<div style="color: green;">Email valido</div>');
    } else{
      stats.append('<div style="color: red;">Email invalido</div>');
      event.preventDefault();
    }
    if (mensaje.length === 0){
      stats.append('<div style="color: red;">Su mensaje esta vacio</div>')
      event.preventDefault();
    } else{
      stats.append('<div style="color: green;">Mensaje aprobado</div>')
    }
  })
})
