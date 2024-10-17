let videoVisible = true; // Estado de visibilidad del video

document.getElementById("sorpresa-btn").addEventListener("click", function() {
    const video = document.getElementById("video-terror");
    const sonidoSusto = document.getElementById("sonido-susto");

    // Si el video está visible, lo ocultamos
    if (videoVisible) {
        video.style.display = "none"; // Oculta el video
        document.body.style.backgroundImage = "url('pennywise-dientes-espejo-it-chapter2.jpg')"; // Cambia el fondo
        sonidoSusto.play(); // Reproduce el sonido de susto
        this.textContent = "Vuelve a la calma..."; // Cambia el texto del botón
    } else {
        video.style.display = "block"; // Muestra el video de nuevo
        document.body.style.backgroundImage = "none"; // Restablece el fondo
        this.textContent = "¿Qué es esto?"; // Restaura el texto original del botón
    }

    // Alternar el estado de visibilidad del video
    videoVisible = !videoVisible;
});
