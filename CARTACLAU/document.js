const page1 = document.getElementById('page-1');
const page2 = document.getElementById('page-2');
const page3 = document.getElementById('page-3');

document.getElementById('bear').addEventListener('click', () => {
  page1.classList.add('hidden');
  page2.classList.remove('hidden');
});

document.getElementById('yes').addEventListener('click', () => {
  page2.classList.add('hidden');
  page3.classList.remove('hidden');
});

const noButton = document.getElementById('no');

// Mover el botón "No" a una posición aleatoria al pasar el cursor
noButton.addEventListener('mouseover', () => {
  const container = noButton.parentElement; // Contenedor del botón
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  // Generar nuevas coordenadas aleatorias dentro del contenedor
  const newLeft = Math.random() * (containerWidth - noButton.offsetWidth);
  const newTop = Math.random() * (containerHeight - noButton.offsetHeight);

  // Aplicar las nuevas coordenadas
  noButton.style.position = 'absolute';
  noButton.style.left = `${newLeft}px`;
  noButton.style.top = `${newTop}px`;
});
