// Seleccionar todas las publicaciones
const posts = document.querySelectorAll('.post')

// Para cada publicacion, obtener su boton y su contador, y asignar onclick
posts.forEach(post => {
  // Obtener el botón Like dentro de este post
  const boton = post.querySelector('.like-btn')

  // Obtener el contador dentro de este post
  const contador = post.querySelector('.like-count')

  // Asignar el evento onclick (se usa onclick según pide la actividad)
  boton.onclick = () => {
    // Convertir el texto actual a número y sumar 1
    contador.textContent = parseInt(contador.textContent, 10) + 1
  }
})
