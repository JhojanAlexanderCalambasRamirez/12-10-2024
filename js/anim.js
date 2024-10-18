// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tiro humito al viento y pienso en ella", time: 30.0, duration: 5.0 },
  { text: "Pensando en cuando voy a verla", time: 35.0, duration: 3.0 },
  { text: "Para decirle lo bella", time: 37.0, duration: 4.0 },
  { text: "Que lucía la noche aquella", time: 42.0, duration: 3.0 },
  { text: "Cuando hacíamos el amor", time: 44.0, duration: 5.0 },
  { text: "Eso queda entre los dos", time: 47.0, duration: 4.0 },
  { text: "Sin olvidarme de tu olor", time: 49.0, duration: 6.5 } // Última línea antes de redirigir
];

// Función para actualizar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
  }

  // Redirigir a "Home.html" después de la última línea
  var lastLine = lyricsData[lyricsData.length - 1];
  if (time >= lastLine.time + lastLine.duration) {
    window.location.href = "Home.html"; // Redirigir a la página
  }
}

// Llamar a la función cada 100 milisegundos para sincronizar
setInterval(updateLyrics, 100);
