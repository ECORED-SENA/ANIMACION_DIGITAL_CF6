<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center
      .col-lg-2.col-3.d-flex(data-aos="fade-right")
        figure.img-right
          img(src='@/assets/curso/intro/img01.svg')
      .col-9.tarjeta.BG01.p-4(data-aos="fade-left")
        .row.justify-content-center
          .col-lg-10
            p.mb-0 Le damos la bienvenida al estudio del componente 06 de Animación Digital; en este contenido se plasman algunos elementos de la animación básica y avanzada. Para comenzar, explore el recurso que se muestra a continuación. ¡Adelante!
    
    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/sRkQ8rGBOh8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
