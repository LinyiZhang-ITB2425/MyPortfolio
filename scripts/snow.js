// Función para crear un copo de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerText = '❄️';
  
    // Tamaño aleatorio del copo
    const size = Math.random() * 5 + 10; // Entre 10px y 15px
    snowflake.style.fontSize = `${size}px`;
  
    // Posición aleatoria
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * -window.innerHeight;
    snowflake.style.left = `${x}px`;
    snowflake.style.top = `${y}px`;
  
    // Duración y retraso de animación aleatorios
    const duration = Math.random() * 10 + 5; // Entre 5s y 15s
    const delay = Math.random() * 5; // Entre 0s y 5s
    snowflake.style.animationDuration = `${duration}s`;
    snowflake.style.animationDelay = `-${delay}s`;
  
    document.body.appendChild(snowflake);
  }
  
  // Generar varios copos de nieve
  function generateSnowflakes(count) {
    for (let i = 0; i < count; i++) {
      createSnowflake();
    }
  }
  
  // Generación inicial
  generateSnowflakes(200); // Cambia este número para más o menos copos
  
  // Generación continua
  setInterval(() => {
    createSnowflake();
  }, 200); // Controla la frecuencia de nuevos copos
  