<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 #[i Layout]: elementos principales
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .bloque-texto-g.color-primario.p-2.p-sm-4.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="fade-left") 
            p.mb-0 El #[i layout] es un término que no solo se emplea en la animación y el diseño gráfico o visual, este también es conocido en diversas áreas y sectores de desarrollo; hace referencia directa a la planeación, organización o maquetación, dentro de un proyecto específico. Este concepto se acuña a nivel empresarial, industrial, tecnológico, de programación y de diseño. 
      .col-lg-10.mb-4
        p.text-center.mb-4 Amplíe su concepto y conocimiento sobre #[i layout], estudiando atentamente el recurso que se muestra a continuación:

        ImagenInfograficaB.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img02.svg')

          div(x="19%" y="92%" tooltip="Objetivo")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                .h4.text-center.mb-4
                  <div style="color:#D44F4A !important;"> Objetivo </div>
                p.mb-4 El objetivo principal que cumple el #[i Layout], dentro de cualquier área en la que se esté empleando, es bosquejar el uso, disposición, distribución y ubicación que debe tener cada objeto, información o elemento dentro de su esquema, espacio o proyecto en ejecución.
                img(src='@/assets/curso/tema2/img03.png')
          div(x="36%" y="11%" tooltip="Diseño y planificación")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                .h4.text-center.mb-4
                  <div style="color:#D44F4A !important;"> Diseño y planificación </div>
                p.mb-4 En la animación digital el #[i Layout] debe diseñar y planificar la distribución de un personaje u objeto, dentro del plano visual que se le está creando al espectador. 
                img(src='@/assets/curso/tema2/img04.png')
          div(x="51%" y="92%" tooltip="Punto de partida del diseñador")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                .h4.text-center.mb-4
                  <div style="color:#D44F4A !important;"> Punto de partida del diseñador </div>
                p.mb-4 El diseñador o artista #[i Layout], dentro de un proyecto audiovisual, específicamente uno animado, debe partir del guion gráfico o storyboard, para generar la distribución, técnicamente, a través de capas, que ocupa dentro del plano visual cada elemento (ya sea personaje u objeto), para desarrollar la escena.
                img(src='@/assets/curso/tema2/img05.png')
          div(x="66%" y="11%" tooltip="Desarrollo de la escena")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                .h4.text-center.mb-4
                  <div style="color:#D44F4A !important;"> Desarrollo de la escena </div>
                p.mb-4 Las posiciones de los objetos en la escena se definen de acuerdo con la intencionalidad que tenga cada escena, para cumplir con la historia planteada dentro del guion por el director.
                img(src='@/assets/curso/tema2/img06.png')
          div(x="79%" y="30%")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                p.mb-4 Esta etapa de la producción animada se puede entender de manera más práctica como una fase fundamental para iniciar la animación de escenas y personajes.
                img(src='@/assets/curso/tema2/img07.png')
          div(x="84%" y="30%")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                p.mb-4 En esta planeación, además de la ubicación de cada elemento, se determina el movimiento de cámara, se define el tipo de plano, el fondo o #[i backgound] y la iluminación necesaria para que la escena cumpla con la intencionalidad de la historia.
                img(src='@/assets/curso/tema2/img08.png')
          div(x="79%" y="92%")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                p.mb-4 En esta fase, el diseñador #[i Layout] entrega toda la información detallada técnica y artística, necesaria para desarrollar la producción.
                img(src='@/assets/curso/tema2/img09.png')
          div(x="84%" y="92%")
            .row.justify-content-center.mb-4
              .col-lg-10.mb-4
                p.mb-4 Otros autores también sugieren que esta fase evita o disminuye los errores en la fase de producción de la animación, ya que el #[i Layout] entrega detalles de intención, visuales, artísticos y técnicos. 
                img(src='@/assets/curso/tema2/img10.png')
      .col-lg-6.mb-4(data-aos="fade-right") 
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor.p-4
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img11.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              p Conozca la manera en que se ve un fragmento de un #[i Layout] de una escena animada, visitando el video 
                strong “#[i Layout y animatic] de corto Condorito “La Gota”
                | , el cual se encuentra en el material complementario. 
        
      .col-lg-10.mb-4
        p.mb-4 A continuación, conozca cómo, dentro de la fase del #[i layout], se ejecutan subetapas que deben ser contempladas por el diseñador para componer las distintas capas que tiene cada plano en la creación de las escenas en la historia animada:
        figure.mb-4
          img(src='@/assets/curso/line.svg')
        SlyderB.mb-5(:datos="datosSlyder")(data-aos="fade-right") 

    separador        

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Cámara, planos y movimientos',
        texto:
          'Para este momento el diseñador o artista <em>layout</em>, basado en las instrucciones del <em>storyboard</em>, diseña en capas el tipo de movimiento y plano que requieren los elementos, distribuyendo la ubicación de estos en el formato de pantalla usado en la generación del producto animado. Los planos, movimientos y distribución están basados en la intención que tiene implícita la acción del personaje y los objetos.',
        imagen: require('@/assets/curso/tema2/img12.png'),
      },
      {
        titulo: 'Fondo',
        texto:
          'Fondo o <em>background</em> es, para algunos expertos, vital a la hora de generar el <em>layout</em>. Es un contexto directo en el que el personaje o los objetos de la escena cumplen con el propósito de la historia en ese momento puntual. El <em>background</em> intensifica y complementa el comportamiento de personajes en escena. Debe tenerse en cuenta la sincronía entre los movimientos del fondo y las acciones del personaje.',
        imagen: require('@/assets/curso/tema2/img13.png'),
      },
      {
        titulo: 'Iluminación',
        texto:
          'La iluminación que se genera en las escenas también recibe pautas específicas a través del <em>layout</em> para su diseño, partiendo de la premisa que, este, es el plano de ubicación de cada elemento dentro de la escena. De allí se desprende el lugar en que deben ir las luces y, asumiendo la ubicación tiempo y espacio, genera como respuesta inherente el color específico y la iluminación que cada composición requiere para cumplir la intencionalidad de la historia.',
        imagen: require('@/assets/curso/tema2/img14.png'),
      },
      {
        titulo: 'Animación',
        texto:
          'Dentro del <em>layout</em> se definen las acciones y las poses clave del personaje dentro de la escena que se está creando; allí se ubica el punto de partida y el final de la acción del personaje y la intencionalidad de los movimientos. En esta fase de animación también se establece el tamaño que tendrá el personaje o los elementos dentro del plano. ',
        imagen: require('@/assets/curso/tema2/img15.png'),
      },
      {
        titulo: 'Para tener en cuenta',
        texto:
          'La planeación de una secuencia a través del <em>Layout</em>, da la posibilidad de tener una vista previa de la idea del director en boceto y así minimizar los errores que se puedan cometer en las siguientes etapas de la producción animada.',
        imagen: require('@/assets/curso/tema2/img16.png'),
      },
    ],
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
