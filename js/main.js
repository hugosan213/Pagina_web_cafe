function cargarSeccion(id, archivo) {
  fetch(archivo)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
    })
    .catch(err => console.error("Error cargando:", archivo, err));
}

// Cargar todas las secciones
cargarSeccion("seccion-hero", "./html/hero.html");
cargarSeccion("galeria", "./html/galeria.html");
cargarSeccion("sobre_nosotros", "./html/sobre_nosotros.html");
cargarSeccion("contacto", "./html/mapa.html");