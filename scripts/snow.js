// Función para crear un copo de nieve
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.innerText = '❄️';

  // Tamaño aleatorio del copo
  const size = Math.random() * 2 + 12; // Entre 10px y 15px
  snowflake.style.fontSize = `${size}px`;

  // Posición inicial aleatoria
  const x = Math.random() * window.innerWidth; // En cualquier posición horizontal
  const y = Math.random() * -window.innerHeight; // Fuera de la pantalla arriba
  snowflake.style.left = `${x}px`;
  snowflake.style.top = `${y}px`;

  // Elegir aleatoriamente la animación
  const randomAnim = Math.random();
  if (randomAnim < 0.33) {
      // 33% de probabilidad para caer verticalmente
      snowflake.style.animationName = 'snowfall-vertical';
  } else if (randomAnim < 0.66) {
      // 33% de probabilidad para caer diagonalmente desde la esquina derecha
      snowflake.style.animationName = 'snowfall-diagonal';
  } else {
      // 34% de probabilidad para caer diagonalmente desde la esquina izquierda
      snowflake.style.animationName = 'snowfall-diagonal-left';
  }

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

// Generación inicial de más copos de nieve
generateSnowflakes(500); // Genera 500 copos al inicio en lugar de 200

// Generación continua de copos más rápido
setInterval(() => {
  createSnowflake();
}, 100); // Controla la frecuencia de nuevos copos (ahora cada 100ms)
