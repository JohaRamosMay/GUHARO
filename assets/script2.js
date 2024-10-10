const palabraCorrecta = 'b'; // Respuesta correcta

    function checkAnswer(opcion) {
      if (opcion === palabraCorrecta) {
        Swal.fire({
          title: '¡Correcto!',
          text: '¡Increíble, has resuelto la adivinanza más difícil!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: '¡Incorrecto!',
          text: 'Respuesta equivocada, te llevaré a una sorpresa diferente...',
          icon: 'error',
          confirmButtonText: 'Ver la sorpresa'
        }).then(() => {
          window.location.href = 'qr_plin_yape.html'; // Redirige a la página del QR si fallan
        });
      }
    }