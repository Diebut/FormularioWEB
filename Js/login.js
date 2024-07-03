document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario real
        
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');

        // Obtener datos almacenados
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        let errorMessages = [];

        if (email === "" || password === "") {
            errorMessages.push("Todos los campos son obligatorios.");
        }

        if (email !== storedEmail || password !== storedPassword) {
            errorMessages.push("Correo electrónico o contraseña incorrectos.");
        }

        if (errorMessages.length > 0) {
            errorMessage.innerHTML = errorMessages.join('<br>');
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
            // Simula la redirección a la página principal después de iniciar sesión
            window.location.href = 'formulario.html';
        }
    });
});
