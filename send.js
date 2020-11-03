console.log('It works');

$(document).ready(function (){
  $('.inscription-form').click(function (event){
    console.log('Clicked button');

    var nombre = $('.name').val().trim();
    var email = $('.email').val().trim();
    var comentario = $('.comment').val().trim();
    var stats = $('.status');
    stats.empty();

    if (nombre.length > 0){
      stats.append('<div style="color: green;">Nombre valido</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Por favor ingrese su nombre</div>');
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')){
      stats.append('<div style="color: green;">Email valido</div>');
    } else{
      event.preventDefault();
      stats.append('<div style="color: red;">Email invalido</div>');
    }
  })
})
