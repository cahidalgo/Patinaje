document.addEventListener("DOMContentLoaded", function() {
    // Toggle del menú
    document.querySelector(".menu-toggle").addEventListener("click", function() {
        document.getElementById('menu').classList.toggle('active');
    });

    // Validación del formulario de inicio de sesión
    const loginButton = document.querySelector("#login-btn");
    if (loginButton) {
        loginButton.addEventListener("click", function() {
            const user = document.querySelector("#user").value.trim();
            const pass = document.querySelector("#pass").value.trim();
            if (user === "" || pass === "") {
                alert("Por favor, completa todos los campos.");
            } else {
                alert("Inicio de sesión exitoso.");
                window.location.href = "perfil.html";  // Redirige al perfil del usuario
            }
        });
    }

    // Funcionalidad del cronómetro
    let startTime, updatedTime, difference, timerInterval;
let running = false;

document.getElementById("start").addEventListener("click", function() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(updateTime, 1000);
        running = true;
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(timerInterval);
    difference = new Date().getTime() - startTime;
    running = false;
});

document.getElementById("reset").addEventListener("click", function() {
    clearInterval(timerInterval);
    document.getElementById("time").innerText = "00:00:00";
    difference = 0;
    running = false;
});

function updateTime() {
    updatedTime = new Date().getTime() - startTime;
    let seconds = Math.floor((updatedTime / 1000) % 60);
    let minutes = Math.floor((updatedTime / (1000 * 60)) % 60);
    let hours = Math.floor((updatedTime / (1000 * 60 * 60)) % 24);
    
    document.getElementById("time").innerText =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
}
});
