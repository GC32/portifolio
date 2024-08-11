function typeWrite(elemento) {
  const textArray = elemento.innerHTML.split('');

  elemento.innerHTML = '';

  textArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra,150* i)
  });
}




const titulo = document.querySelector('h1');
typeWrite(titulo)