function toggleMode() {
  const html = document.documentElement

 /* if(html.classList.contains('light')){
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
 */
  html.classList.toggle('light')


  
  // pegar a tag img
  const img = document.querySelector("#profile img")
  
  // se tiver light mode, adicionar a imagem light
  if(html.classList.contains('light')){
    img.setAttribute("src", "./assets/assets/pedro2.jpg")  
  
    // se tiver sem light mode, manter a imagem normal
  } else {
    img.setAttribute("src", "./assets/assets/pedro.jpg")
  }
}