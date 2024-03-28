 //Seleccionamos el boton y el parrafo para el conteo
 const clickButton = document.getElementById("clickButton");
 const clickCount = document.getElementById("clickCount");

 //Inicializamos el contador
 let contadorClicks = 0;

 //Funcion para manejar el click del boton
 clickButton.addEventListener("click", () => {
   //contadorClicks=contadorClicks+1;
   contadorClicks++;
   clickCount.textContent = contadorClicks + " clicks";
 });