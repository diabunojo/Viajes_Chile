//muestra el tooltip de mensaje enviado
    $(document).ready(function () {
        $("#enviarMensaje").click(function () {
          $(this).tooltip("show");
        });
      });

      $(document).ready(function () {
        $("#icon").hover(function () {
          $(this).tooltip("show");
        });
      });