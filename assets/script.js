function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  const feedback = document.getElementById('feedback');

  // Código secreto para desbloquear
  const secretCode = "infinity"; 

  if (passwordInput.toLowerCase() === secretCode) {
    feedback.textContent = "¡Hackeo exitoso!";
    feedback.style.color = "#00ff00";
    
    
    window.location.href = "mensaje_cumple.html";  
  } else {
    feedback.textContent = "Código incorrecto. ¡Intenta de nuevo!";
    feedback.style.color = "#ff4444";
  }
}
