import "./import-jquery.js";

$(document).ready(main);

let menuBar = true;

function main() {
    $('.menu_bar').click(function () {

        if (menuBar) {
            $('nav').animate({
                left: '0',
                bottom: '110px',
                height: '300px'
            });
        } else {
            $('nav').animate({
                left: '-100%',
                bottop: '110px',
                height: '300px'
            });
        }
        menuBar = !menuBar;
    });
    transacciones();
};

function transacciones() {

    const imagenes = document.querySelectorAll('.imagen');

    // Establece el índice de la imagen activa
    let indiceImagenActiva = 0;
    
    function cambiarImagen() {
// if (imagenes!=undefined) {

      // Remueve la clase "active" de la imagen actual
      imagenes[indiceImagenActiva].classList.remove('active');
    
      // Incrementa el índice de la imagen activa
      indiceImagenActiva = (indiceImagenActiva + 1) % imagenes.length;
    
      // Agrega la clase "active" a la nueva imagen activa
      imagenes[indiceImagenActiva].classList.add('active');
    
      // Establece un tiempo de espera antes de cambiar a la siguiente imagen
      setTimeout(cambiarImagen, 3000); // Cambiar imagen cada 3 segundos (3000 milisegundos)
    }
    
    // Inicia la transición de imágenes
    setTimeout(cambiarImagen, 3000);
//}
}

