<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Pantomima 

    .BG07.p-4.mb-4
      .row.justify-content-center     
        .col-lg-8(data-aos="fade-right") 
          img(src='@/assets/curso/tema4/img01.png')
    
    .row.justify-content-center.mb-4    
      .col-lg-10.mb-4
        p El lenguaje ha estado presente en la historia de la humanidad y aunque, científicamente, no se ha logrado establecer una fecha exacta para datar este tipo de expresión, lo que definitivamente sí se ha conocido a lo largo de la historia es que, antes de desarrollarse un lenguaje verbal, la especie humana se comunicaba con el lenguaje corporal, el cual seguirá presente en la historia y del que se desprenden múltiples formas de comunicar. Las expresiones, los movimientos y la gesticulación de una persona, suelen comunicar muchas cosas.    
      .col-lg-8.mb-4
        .cajon.color-primario.p-4(data-aos="fade-right") 
          p A continuación, se muestran los aspectos generales más relevantes que usted debe tener en cuenta en lo relativo a pantomima, en el marco de la animación:
      .col-lg-10.mb-4(data-aos="fade-right") 
        SlyderC.mb-5(:datos="datosSlyder")

    .BG06.border-radius-0.p-4.mb-4
      #t_4_1.titulo-segundo(data-aos="fade-right")
        .h3 4.1 #[i Acting]
      
      p.mb-4 Dentro de la animación, se entiende como el comportamiento principal que posee cada personaje y que está planteado desde el diseño mismo. Este, parte de las premisas emocionales y psicológicas que se hayan creado para él.
      .row.justify-content-center.mb-4    
        .col-lg-8.BG08.p-2.mb-4(data-aos="fade-right") 
          p.mb-0 En lo referente al #[i Acting], tenga presente las características que se enuncian a continuación:
        .col-lg-10(data-aos="fade-right") 
          TabsA.color-acento-botones.mb-5
            .tarjeta.BG05.p-4(titulo="Características 1")
              .row.align-items-center.mb-2        
                .col-lg-6.mb-4.mb-lg-0
                  h4 Predicción y familiarización con personajes
                  p Fundamentalmente, esta característica dentro de la animación permite que el espectador pueda predecir, conocer y grabar en su imaginario, rasgos únicos de cada uno de los personajes.
                .col-lg-6
                  img(src='@/assets/curso/tema4/img07.png')
            .tarjeta.BG05.p-4(titulo="Características 2")
              .row.align-items-center.mb-2        
                .col-lg-6.mb-4.mb-lg-0
                  h4 El #[i Acting] y la pantomima
                  p El #[i Acting] está estrechamente relacionada con la pantomima; ambos elementos van ligados al comportamiento y personalidad del personaje protagonista.
                .col-lg-6
                  img(src='@/assets/curso/tema4/img08.png')
            .tarjeta.BG05.p-4(titulo="Características 3")
              .row.align-items-center.mb-2        
                .col-lg-6.mb-4.mb-lg-0
                  h4 El #[i Acting], herramienta para el espectador
                  p Ciertos movimientos, poses o ademanes específicos de los personajes, dan al espectador la oportunidad de saber lo que va a pasar o la reacción que va tener el personaje ante una situación específica.
                .col-lg-6
                  img(src='@/assets/curso/tema4/img09.png')
            .tarjeta.BG05.p-4(titulo="Características 4")
              .row.align-items-center.mb-2        
                .col-lg-6.mb-4.mb-lg-0
                  h4 Convencimiento
                  p El desarrollo de un buen Acting genera en el espectador el convencimiento firme de que el personaje existe y, como efecto, se deja guiar por el mismo dentro de la historia que se está compartiendo.
                .col-lg-6
                  img(src='@/assets/curso/tema4/img10.png')

    separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h3 4.2 Expresiones faciales
    
    .row.justify-content-center.mb-2        
      .col-lg-10.mb-4
        p Las expresiones del rostro también son parte del lenguaje corporal no verbal y, para muchos teóricos, este lenguaje facial complementa el corporal en general, y viceversa: Pero si ambos no entran en una armonía, el uno puede restarle al otro.
      .col-lg-10.mb-4(data-aos="flip-up") 
        img(src='@/assets/curso/tema4/img11.svg')
      .col-lg-10.mb-4(data-aos="fade-right") 
        .bloque-texto-c.BG05.p-4
          i.fas.fa-quote-left
          p.text-bold Si en el proceso de animación se logra un equilibrio entre la expresividad no verbal, que se emite desde el rostro y el cuerpo, una historia no necesitaría, relativamente, diálogos para contarse.
          span - Casal, E., 2015

    .row.mb-5
      .col-lg-6.mb-4(data-aos="fade-right")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .BG08
                img(src='@/assets/curso/tema4/img12.svg')
            .tarjeta-flip__contenido.p-3
              .row.justify-content-center
                .col-2
                  img(src='@/assets/curso/tema4/img14.svg')
              p Las expresiones del rostro del personaje, puede afianzar relación con el espectador y generar empatía o sentimientos contrarios.  

      .col-lg-6.mb-4(data-aos="fade-left")
        .tarjeta.tarjeta-flip.color-acento-contenido(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .BG08
                img(src='@/assets/curso/tema4/img13.svg')
            .tarjeta-flip__contenido.p-3
              .row.justify-content-center
                .col-2
                  img(src='@/assets/curso/tema4/img14.svg')
              p Las expresiones faciales no sólo entregan datos de las emociones del personaje, también pueden entregar información sobre la personalidad de este, pues va más allá de los elementos y rasgos que forman un rostro; es la intención de los movimientos y expresiones de este. 

    separador
    #t_4_3.titulo-segundo(data-aos="fade-right")
      .h3 4.3 #[i Lipsync]
    
    p.mb-4 El #[i Lipsync] es el proceso que permite a los personajes animados “hablar”; esto ocurre mediante la sincronización entre la gesticulación de los labios del personaje diseñado y una pista de audio pregrabada, creando un efecto visual en el que el espectador aprecia cómo el personaje vocaliza lo que se está conversando o dialogando.

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right") 
        SlyderF(columnas="col-12")
          .tarjeta
            img(src='@/assets/curso/tema4/img15.svg')

          .tarjeta
            img(src='@/assets/curso/tema4/img16.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img17.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img18.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img19.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img20.svg')

          .tarjeta
            img(src='@/assets/curso/tema4/img21.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img22.svg')
          
          .tarjeta
            img(src='@/assets/curso/tema4/img23.svg')

    .row.justify-content-center
      .col-lg-10(data-aos="fade-right") 
        .BG05.p-2
          p.mb-0.text-center Estas son algunas generalidades del Lipsync que se deben tener en cuenta en los procesos de animación:

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Lenguaje de los movimientos',
        texto:
          'La pantomima tiene lugar dentro del lenguaje corporal no verbal; se basa principalmente en contar una historia y transmitir sentimientos por medio de movimientos, expresiones corporales y gesticulación.',
        imagen: require('@/assets/curso/tema4/img02.png'),
      },
      {
        titulo: 'Conexión con el espectador',
        texto:
          'Los movimientos, expresiones corporales y la gesticulación, conectan con el espectador y logran comunicar lo que está pensando, sintiendo o viviendo, quien hace uso de este tipo de lenguaje. ',
        imagen: require('@/assets/curso/tema4/img03.png'),
      },
      {
        titulo: 'Generación de emociones y conexión',
        texto:
          'Dentro de la animación, la pantomima ha cumplido un trabajo vital para que los personajes puedan tener fuerza y personalidad, suficientemente marcadas, para contar una historia y generar emociones y enganche con el espectador.',
        imagen: require('@/assets/curso/tema4/img04.png'),
      },
      {
        titulo: 'Convencimiento y realismo',
        texto:
          'La pantomima ha permitido convencer al público, de la existencia del personaje, a pesar de ser ficticio y animado. La pantomima permite que el animador genere poses, movimientos y gestos puntuales, que tiene un personaje.',
        imagen: require('@/assets/curso/tema4/img05.png'),
      },
      {
        titulo: 'Lenguaje eficaz',
        texto:
          'Este fue un tipo lenguaje corporal usado por Charles Chaplin. Con la pantomima, se crea un atractivo y se comunica, eficazmente, lo que quiere decir el personaje, además de generar un efecto de anticipación al espectador, quien puede prever acciones o emociones puntuales que van a presentarse, enseguida, para un personaje.',
        imagen: require('@/assets/curso/tema4/img06.png'),
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
