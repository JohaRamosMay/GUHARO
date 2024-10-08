function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  // Código secreto para desbloquear
  const secretCode = "infinity"; // Puedes cambiar este código por algo personalizado

  if (passwordInput.toLowerCase() === secretCode) {
    feedback.textContent = "¡Hackeo exitoso!";
    feedback.style.color = "#00ff00";
    
    // Redirigir a otro HTML cuando el código es correcto
    window.location.href = "mensaje_cumple.html";  // Cambia "mensaje_cumple.html" por el nombre de tu archivo
  } else {
    feedback.textContent = "Código incorrecto. ¡Intenta de nuevo!";
    feedback.style.color = "#ff4444";
  }
}
