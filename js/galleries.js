document.addEventListener("DOMContentLoaded", function () {
  new Glide(".glide", {
    type: "carousel", // Tipo de carrusel
    startAt: 0, // Slide inicial
    perView: 1, // Número de slides visibles
    focusAt: "center", // Enfocar el slide central
    gap: 20, // Espacio entre slides
    autoplay: 8000, // Autoplay cada 3 segundos (opcional)
    hoverpause: true, // Pausar autoplay al hacer hover
    breakpoints: {
      800: {
        perView: 2, // Cambiar a 2 slides en pantallas pequeñas
      },
      500: {
        perView: 1, // Cambiar a 1 slide en pantallas muy pequeñas
      },
    },
  }).mount();

  new Glide(".glide2", {
    type: "carousel", // Tipo de carrusel
    startAt: 0, // Slide inicial
    perView: 1, // Número de slides visibles
    focusAt: "center", // Enfocar el slide central
    gap: 20, // Espacio entre slides
    autoplay: 8000, // Autoplay cada 3 segundos (opcional)
    hoverpause: true, // Pausar autoplay al hacer hover
    breakpoints: {
      800: {
        perView: 2, // Cambiar a 2 slides en pantallas pequeñas
      },
      500: {
        perView: 1, // Cambiar a 1 slide en pantallas muy pequeñas
      },
    },
  }).mount();

  new Glide(".glide3", {
    type: "carousel", // Tipo de carrusel
    startAt: 0, // Slide inicial
    perView: 1, // Número de slides visibles
    focusAt: "center", // Enfocar el slide central
    gap: 20, // Espacio entre slides
    autoplay: 8000, // Autoplay cada 3 segundos (opcional)
    hoverpause: true, // Pausar autoplay al hacer hover
    breakpoints: {
      800: {
        perView: 2, // Cambiar a 2 slides en pantallas pequeñas
      },
      500: {
        perView: 1, // Cambiar a 1 slide en pantallas muy pequeñas
      },
    },
  }).mount();

  // Configuración de Lightbox2
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    showImageNumberLabel: true,
    disableScrolling: true,
  });
});
