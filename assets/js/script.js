//muestra el tooltip de mensaje enviado
    $(document).ready(function () {
        $("#enviarMensaje").click(function () {
          $(this).tooltip("show");
        });
      });
// muestra mensaje cuando se pasa el mouse por encima
      $(document).ready(function () {
        $("#icon").hover(function () {
          $(this).tooltip("show");
        });
      });
// muestra un mensaje del lugar de la foto al pasar el mouse por el titulo
      $(document).ready(function () {
        $("#card1").hover(function () {
          $(this).tooltip("show");
        });
      
        $("#card2").hover(function () {
          $(this).tooltip("show");
        });
      
        $("#card3").hover(function () {
            $(this).tooltip("show");
          });
        
          $("#card4").hover(function () {
            $(this).tooltip("show");
          });
      });
      

