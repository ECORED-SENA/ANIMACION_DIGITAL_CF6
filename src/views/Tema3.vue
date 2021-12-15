<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Proceso de un plano animado

    <br><br>
    .BG02.p-4-mb-4
      .row.justify-content-center.mb-4
        .col-lg-3.col-6.mb-0(data-aos="fade-down") 
          img.img-top(src='@/assets/curso/tema3/img01.svg')
        .col-lg-9
          br
          p.mb-4 Todo proyecto de creación audiovisual, incluido el proceso de una composición animada, requiere cumplir unas etapas básicas de producción que permiten el desarrollo de la historia y de los personajes que ésta incluye como, por ejemplo, los protagonistas.
          p.mb-0 En este punto del componente entérese, con mayor profundidad, de las etapas clave del proceso de producción animado. Ello le favorecerá comprender el proceso de plano animado global y local, de los personajes:


    .row.justify-content-center.mb-2
      .col-lg-8(data-aos="fade-donw") 
        .tarjeta.tarjeta-slide.arriba.BG04(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5
              p El proceso que se debe completar para la construcción de un plano animado no es ajeno a las etapas de producción que se deben ejecutar para dar orden, coherencia y forma a la composición. 
            .tarjeta-slide__img
              .BG04.p-4.p-lg-5
                br
                .h3.text-center.mb-4
                  <div style="color:#D44F4A !important;"> Procesos de un plano animado </div>
                img(src='@/assets/curso/line.svg')
 
    .row.justify-content-center.mb-2        
      .col-lg-4.mb-5.mb-lg-0(data-aos="fade-right") 
        .tarjeta.tarjeta-slide.izquierda.BG05(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5
              .h4
                <div style="color:#D44F4A !important;"> ● Preproducción </div>
              p Dentro de esta etapa de la producción, para crear un producto de animación, se condensan los primeros pasos para estructurar la historia y los componentes, características e intencionalidades que esta y sus personajes requieren, para llevarlos a una etapa de producción y posproducción.
            .tarjeta-slide__img
              .BG05.p-4.p-lg-5
                .row.justify-content-center
                  .col-lg-10.col-md-3.col-sm-6.col-4.p-1
                    img(src='@/assets/curso/tema3/img02.svg')
      .col-lg-4.mb-0(data-aos="fade-left")
        .tarjeta.tarjeta-slide.derecha.BG05(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5
              p La fase de preproducción obedece a toda la planeación y diseño previo que se requiere para iniciar la ejecución de la composición animada. En esta etapa se definen los tiempos y cronogramas de cumplimiento para desarrollar el resto de las fases, hasta obtener el producto finalizado.
            .tarjeta-slide__img
              .BG05.p-4.p-lg-5
                .row.justify-content-center
                  .col-lg-10.col-md-3.col-sm-6.col-4.p-1
                    img(src='@/assets/curso/tema3/img03.svg')

    .row.justify-content-center.mb-2       
      .col-lg-8.mb-4(data-aos="fade-up") 
        .tarjeta.tarjeta-slide.abajo.BG06(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              p.mb-4 Sin detallar cada subetapa que compone la preproducción, estos son algunos componentes importantes que la completan, para pasar a la siguiente etapa dentro de la producción:
              .row.justify-content-center       
                .col-lg-6.col-md-6
                  img(src='@/assets/curso/tema3/img08.png')
                .col-lg-6.col-md-6
                  ul.lista-ul--color
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Idea y desarrollo de la historia
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Guion
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Diseño de personajes o #[i.text-bold Model sheets]
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Diseño de locaciones y #[i.text-bold matte painting] donde transcurren las escenas
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Desarrollo del #[i.text-bold storyboard] o guion gráfico
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Diseño de estética o #[i.text-bold look development]
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Diseño de audio 
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 #[i.text-bold Animatic] 
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 Planificación técnica 
                    li.mb-0
                      i.fas.fa-chevron-right
                      p.mb-0 #[i.text-bold Layout] 
            .tarjeta-slide__img
              .BG06.p-4.p-lg-5
                .row.justify-content-center       
                  .col-lg-10
                    img(src='@/assets/curso/tema3/img04.svg')

    .row.justify-content-center.mb-2        
      .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right") 
        .tarjeta.tarjeta-slide.izquierda.BG05(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5
              p.text-small.mb-4 Esta fase permite tener el trabajo organizado y planificado para pasar a desarrollo con el mínimo de errores a la siguiente fase de la producción.
              p.text-small.mb-0 El desarrollo de estas etapas básicas de la preproducción, pueden generar para el proyecto de producción animada, la facilidad en la ejecución del mismo.
            .tarjeta-slide__img
              .BG05.p-4.p-lg-5
                .row.justify-content-center       
                  .col-lg-10.col-md-3.col-sm-6.col-4.p-1
                    img(src='@/assets/curso/tema3/img05.svg')
                    <br><br><br>
      .col-lg-4(data-aos="fade-left")
        .tarjeta.tarjeta-slide.derecha.BG05(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-lg-5
              .h4
                <div style="color:#D44F4A !important;"> ● Producción </div>
              p.text-small.mb-4 Es en esta fase de la producción donde se pone en marcha la ejecución del producto que se va a entregar al espectador, es decir que este es el momento en el cual entra todo el equipo en acción en la elaboración del animado. 
              p.text-small.mb-0 Acá, gracias a la planificación y diseño efectuado en la preproducción, se puede ejecutar y materializar, de manera visual, todo lo imaginado para la historia: los personajes y los objetos que componen las distintas secuencias que componen el producto. 
            .tarjeta-slide__img
              .BG05.p-4.p-lg-5
                .row.justify-content-center
                  .col-lg-10.col-md-3.col-sm-6.col-4.p-1
                    img(src='@/assets/curso/tema3/img06.svg')
                    <br><br><br>

    .row.justify-content-center.mb-2       
      .col-lg-8.mb-4(data-aos="fade-up") 
        .tarjeta.tarjeta-slide.abajo.BG06(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4
              .h4
                <div style="color:#D44F4A !important;"> ● Postproducción </div>
              p.mb-0 Durarte esta etapa del proyecto animado o dentro de cualquier proyecto audiovisual, se hacen los detalles finales, se perfecciona el color, los reflejos, las sombras y otros aspectos relevantes de la composición. Se agregan efectos especiales necesarios para fortalecer la narración. Esta fase culmina con el renderizado del proyecto, el cual debe estar finalizado y en las condiciones que se mostrará al espectador.
            .tarjeta-slide__img
              .BG06.p-4
                .row.justify-content-center       
                  .col-lg-3.col-8
                    img(src='@/assets/curso/tema3/img07.svg')

    separador
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
