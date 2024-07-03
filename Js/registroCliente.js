document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario real

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const pais = document.getElementById("pais").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;
    const acceptTerms = document.getElementById("accept_terms").checked;
    const errorMessage = document.getElementById("error-message");

    let errorMessages = [];

    if (nombre === "") {
        errorMessages.push("El nombre no puede estar vacío.");
    }

    if (email === "") {
        errorMessages.push("El correo electrónico no puede estar vacío.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorMessages.push("El correo electrónico no es válido.");
    }

    if (pais === "") {
        errorMessages.push("Debe seleccionar un país.");
    }

    if (password === "") {
        errorMessages.push("La contraseña no puede estar vacía.");
    } else if (password !== confirmPassword) {
        errorMessages.push("Las contraseñas no coinciden.");
    }

    if (!acceptTerms) {
        errorMessages.push("Debe aceptar los términos y condiciones.");
    }

    if (errorMessages.length > 0) {
        errorMessage.innerHTML = errorMessages.join("<br>");
        errorMessage.style.display = "block";
    } else {
        errorMessage.style.display = "none";
      // Aquí podrías agregar lógica de validación adicional y envío de datos al servidor

      // Simula la redirección a la página de login después de registrar
        window.location.href = "login.html";
    }
});
