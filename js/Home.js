function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
  }
  
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
  }
  
  window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(function(modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  
  // Array de rutas de carpetas
const folders = [
  'fotosCuadros/Aniversario',
  'fotosCuadros/Bebes',
  'fotosCuadros/Comida',
  'fotosCuadros/MiNiña',
  'fotosCuadros/TuyYo',
  'fotosCuadros/Universidad',
  'fotosCuadros/Viajes'
];

// Función para cargar todas las imágenes de una carpeta
function loadImages(folderPath) {
  // Aquí simulamos la carga de imágenes; en un entorno real podrías usar una API o backend
  // para obtener los archivos dentro de la carpeta.
  // Debes asegurarte de tener las imágenes nombradas de manera secuencial, como foto1.jpg, foto2.jpg, etc.
  return [
    `${folderPath}/foto1.jpg`,
    `${folderPath}/foto2.jpg`,
    `${folderPath}/foto3.jpg`,
    `${folderPath}/foto4.jpg`,
    `${folderPath}/foto5.jpg`,
    `${folderPath}/foto6.jpg`,
    `${folderPath}/foto7.jpg`,
    `${folderPath}/foto8.jpg`,
    `${folderPath}/foto9.jpg`,
    `${folderPath}/foto10.jpg`,
    `${folderPath}/foto11.jpg`,
    `${folderPath}/foto12.jpg`,
    `${folderPath}/foto13.jpg`,
    `${folderPath}/foto14.jpg`,
    `${folderPath}/foto15.jpg`,
    `${folderPath}/foto16.jpg`,
    `${folderPath}/foto17.jpg`,
    `${folderPath}/foto18.jpg`,
    `${folderPath}/foto19.jpg`,
    `${folderPath}/foto20.jpg`,
    `${folderPath}/foto21.jpg`,
    `${folderPath}/foto22.jpg`,
    `${folderPath}/foto23.jpg`,
    `${folderPath}/foto24.jpg`,
    `${folderPath}/foto25.jpg`,
    `${folderPath}/foto26.jpg`,
    `${folderPath}/foto27.jpg`,
    `${folderPath}/foto28.jpg`,
    `${folderPath}/foto29.jpg`,
    `${folderPath}/foto30.jpg`
   
    // Agrega más imágenes según las tengas en cada carpeta
  ];
}

// Función para rotar las imágenes en un panel
function rotateImages(panelId, images) {
  let index = 0;
  const panel = document.getElementById(panelId);
  const imgTag = panel.querySelector('img');

  // Establecer la primera imagen inmediatamente
  imgTag.src = images[index];

  // Configurar el intervalo para rotar las imágenes cada 5 segundos
  setInterval(() => {
    index = (index + 1) % images.length;
    imgTag.src = images[index];
  }, 10000);
}


// Asigna imágenes a cada panel cuando la página se carga
window.onload = function() {
  // Panel 1: Aniversario
  const aniversarioImages = loadImages(folders[0]);
  rotateImages('panel1', aniversarioImages);

  // Panel 2: Bebes
  const bebesImages = loadImages(folders[1]);
  rotateImages('panel2', bebesImages);

  // Panel 3: Comida
  const comidaImages = loadImages(folders[2]);
  rotateImages('panel3', comidaImages);

  // Panel 4: Mi Niña
  const miNiñaImages = loadImages(folders[3]);
  rotateImages('panel4', miNiñaImages);

  // Panel 5: Tú y Yo
  const tuYoImages = loadImages(folders[4]);
  rotateImages('panel5', tuYoImages);

  // Panel 6: Universidad
  const universidadImages = loadImages(folders[5]);
  rotateImages('panel6', universidadImages);

  // Panel 7: Viajes
  const viajesImages = loadImages(folders[6]);
  rotateImages('panel7', viajesImages);
};
