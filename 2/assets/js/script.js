function Cambia() {
    const color= '#' + Math.floor(Math.random() * 16777215).toString(16); // Generamos un color hexadecimal aleatorio
    cuerpo = document.querySelector('body');
    cuerpo.style.backgroundColor = color;
}
