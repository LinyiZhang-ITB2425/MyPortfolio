document.addEventListener('DOMContentLoaded', function() {
    // Animación para el título
    var h1Element = document.querySelector('h1');
    var title = h1Element.innerText;
    var animatedTitle = '';

    let index = 0;
    function animateTitle() {
        if (index < title.length) {
            animatedTitle += title[index];
            h1Element.innerText = animatedTitle;
            index++;
            setTimeout(animateTitle, 150);
        }
    }

    animateTitle();
});


// Función para validar el correo electrónico
function validarFormulario(event) {
    // Obtener el valor del correo electrónico
    var correo = document.getElementById('mail').value;
    var mensajeError = document.getElementById('errorCorreo');
    
    // Expresión regular para validar correo electrónico con mayor precisión
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    // Validar el correo
    if (!regexCorreo.test(correo)) {
        // Mostrar mensaje de error si el correo es inválido
        mensajeError.textContent = 'Por favor, ingresa un correo electrónico válido (ejemplo: usuario@dominio.com).';
        // Prevenir el envío del formulario
        event.preventDefault();
    } else {
        // Si el correo es válido, limpiar el mensaje de error
        mensajeError.textContent = '';
    }
}