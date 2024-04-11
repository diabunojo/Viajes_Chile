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