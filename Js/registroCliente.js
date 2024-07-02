document.getElementById('registroForm').addEventListener('submit', function(event){
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const acceptTerms  = document.getElementById('acceptTerms').value;
    const errorMessage  = document.getElementById('errorMessage ').value;

    if (password !== confirmPassword) {
        errorMessage.textContent = 'La Contraseña no coincide!';
        errorMessage.style.display = 'Bloquear'
    }else if(!acceptTerms){
        errorMessage.textContent = 'Debe aceptar los términos y condiciones.'
        errorMessage.style.display = 'Bloquear'
    }else{
        errorMessage.style.display = 'none';
    }

    window.location.href = 'login.html';
})