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
      event.preventDefault();
      stats.append('<div style="color: red;">Por favor ingrese su nombre</div>');
    }
    if (telefono.length > 11 && telefono.length < 15 && telefono.includes('+')){
      stats.append('<div style="color: green;">Telefono valido</div>');
    } else{
      if (telefono.length === 0){
        event.preventDefault();
        stats.append('<div style="color: red;">Ingrese su telefono</div>');
      } else{
        event.preventDefault();
        stats.append('<div style="color: red;">Formato de telefono invalido</div>');
      }
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')){
      stats.append('<div style="color: green;">Email valido</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Email invalido</div>');
    }
    if (mensaje.length === 0){
      event.preventDefault();
      stats.append('<div style="color: red;">Su mensaje esta vacio</div>')
    } else{
      stats.append('<div style="color: green;">Mensaje aprobado</div>')
    }
  })
})
