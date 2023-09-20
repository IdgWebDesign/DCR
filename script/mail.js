$(document).ready(function () {
    $('#contactForm').submit(function (e){
        e.preventDefault();

        var nombre= $("#contactName").val();
        var mail= $("#contactEmail").val();
        var tel= $("#contactPhone").val();
        var serv= $("#contactService").val();
        var subj= $("#contactSubject").val();
        var msg= $("#contactMessage").val();
        
        if(!validarCampos(nombre, mail, tel)){
            return;
        }

        function validarCampos(nombre, mail, tel){

            if(nombre=== " " || mail=== " " || tel=== " "){
                alert('Por favor, completa todos los campos')
                return false;
            }

            if(!validarCorreo(mail)){
                alert('Por favor, ingrese un correo válido.')
                return false;
            }

            return true;

        }

        function validarCorreo(mail){
            let regex= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(mail);
        }


        $.ajax({
            type: 'POST',
            url: '../mailPOPUP.php',
            data: $(this).serialize(),
            // Mostramos un mensaje con la respuesta de PHP
      
      success: function() {
        alert('La solicitud ha sido enviada.');
        $('.section-popup').addClass("pop_down");
            },
      error: function() {
        alert('Se ha producido un error. Intentelo más tarde.');

      }

        }); 


    });






});
