<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Principios de la animación
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-8(data-aos="fade-down")
        img.img-bot(src='@/assets/curso/tema1/img01.png')
      .col-lg-10(data-aos="fade-up")
        .BG02.p-4
          <br><br>
          p Los doce principios de la animación desarrollados en los años 30 desde los estudios Disney, su creación se dio gracias a la necesidad de crear un lenguaje entendible entre los animadores y técnicos y acuñados por Frank Thomas y Ollie Johnston. Estos principios se basan en aspectos relativos a las leyes de la física y su objetivo inicial es dar a los personajes una actitud más realista tanto física como emocionalmente.
    
    a(@click="mostrarColaps()")
    #MapaGroup01(data-aos="zoom-in")
      .row.mb-5
        .col-3.col-md-2.col-lg-1.mb-3.mb-lg-0(v-for="num of 12")
          button.ClaseBtn.collapsed(
            :id="`boton${num}`"
            data-bs-toggle="collapse" 
            :data-bs-target="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`" 
            aria-expanded="true" 
            :aria-controls="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`"
          )
            img.img-a.boton_wid(:src="require(`@/assets/curso/tema1/img_${num}.svg`)")
          img.img-a.collapse(
            :id="`collapse${num < 10 ? '0'+num : num}s`"
            src="@/assets/curso/tema1/sdw.svg" 
            data-bs-parent="#MapaGroup01"
            :class="{show: num == hash}"
          )
      
      #collapse01.collapse(:class="{show: hash ? hash == 1 : false}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.1. Estirar y encoger
                p Llamado “Deformación”, es un principio que busca lograr extremos más expresivos y con más fuerza dramática.  Este sirve para reforzar la acción y tornarla creíble y contundente. También resulta un factor esencial para crear una sensación de peso, tanto en la animación de cuerpos, como de objetos.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img1.gif")
      
      #collapse02.collapse(:class="{show: hash == 2}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.2. Anticipación
                p la animación, al ser una secuencia de imágenes, es muy importante vincular una pose con las siguientes, estableciendo una continuidad en las acciones, por lo tanto, el principio de Anticipación ayuda a guiar la mirada del observador al lugar donde está a punto de ocurrir una nueva acción; además de concatenar acciones al hacer previsible lo que va a suceder, también le añade suspenso y le propone directamente al espectador a donde debe  direccionar la atención para no perderse el comienzo de la próxima acción.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img2.gif")

      #collapse03.collapse(:class="{show: hash == 3}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.3. Puesta en escena
                p La puesta en escena cubre varias áreas, pero está vinculada principalmente con la actuación y cómo se la presenta en pantalla; puntualmente nos plantea que, cada plano tiene un encuadre ideal y cada fotograma de la película debe ayudar a llevar la historia hacia su conclusión.  En todo caso, en la puesta en escena, debemos dejar claro el contexto e identificar las relaciones de los elementos y personajes con otros y su entorno.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img3.gif")
      
      #collapse04.collapse(:class="{show: hash == 4}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.4.	Acción directa y pose 
                p Estos dos conceptos se deberían entender como dos técnicas de animación diferentes.  La “Acción directa” hace referencia a la creación de una animación de forma secuencial, cuadro a cuadro; la “Pose” se refiere a la creación de momentos o fotogramas clave para luego crear transiciones entre ellas.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img4.gif")
      
      #collapse05.collapse(:class="{show: hash == 5}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.5.	#[i Overlapping] 
                p También llamada “Acción continuada y superpuesta”, se refiere a que es realmente imposible establecer dónde termina una acción y donde termina la otra en razón a que los elementos de un sistema se mueven de forma asincrónica respondiendo a una jerarquía de su concatenación de acciones.  Por ejemplo, cuando un cuerpo finaliza su trayectoria, sus distintas partes tienden a continuar dicha trayectoria respondiendo a la inercia.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img5.gif")
      
      #collapse06.collapse(:class="{show: hash == 6}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.6.	#[i Easy in & Easy Out]
                p Estos términos hacen referencia en su traducción a “Entradas y salidas suaves”, los cuales buscan que las animaciones sean más naturales y orgánicas y responde a la afectación de las propiedades físicas y orgánicas que afectan a todos los objetos, tales como la gravedad, la resistencia, la tensión y fricción, generando una aceleración y desaceleración progresiva.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img6.gif")
      
      #collapse07.collapse(:class="{show: hash == 7}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.7.	Arcos
                p Al analizar cualquier movimiento orgánico se puede percibir que todas las acciones que lo componen describen arcos, suaves y cerrados, en donde todas las trayectorias resultan curvilíneas, teniendo en cuenta que no hay trayectorias rectas en los movimientos que realizan los seres vivos; esto provoca un tipo de movimiento muy característico, suave y armonioso.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img7.gif")
      
      #collapse08.collapse(:class="{show: hash == 8}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.8.	Acción secundaria
                p La actuación de un personaje se refuerza realizando acciones secundarias que complementan y potencian la acción principal. Esta acción secundaria nunca debe estar más marcada que la acción principal, ya que solo está planteada para enfatizar, siempre buscando atraer la atención del espectador al lugar que interesa, sin distraer ni perder el objetivo principal.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img8.gif")
      
      #collapse09.collapse(:class="{show: hash == 9}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.9.	#[i Timing]
                p El principio de Timing o Ritmo se refiere a que el número de dibujos usados en un movimiento determina la mayor o menor extensión temporal de la acción en la pantalla. Esto afectará directamente en las emociones e intenciones que se procuran mostrar a través del lenguaje corporal del personaje.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img9.gif")
      
      #collapse10.collapse(:class="{show: hash == 10}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.10 Exageración
                p En el campo de la animación, la exageración entrega expresiones y movimientos puntuales de un personaje, elemento u objeto de forma excesiva, con el firme propósito de recalcar el dramatismo y la comicidad. Esto deriva en la distorsión de la forma o movimiento del personaje u objeto.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img10.gif")
      
      #collapse11.collapse(:class="{show: hash == 11}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.11. Solidez
                p Este principio se puede sintetizar en la premisa: Cuanto mejor dibuje, más fácil resultará animar. Al ser capaz de dibujar al personaje en todas sus posiciones imaginables y puntos de vista, la animación resultará más creíble. Para ello es necesario tener una amplia comprensión y correcta aplicación de los conceptos básicos artísticos de perspectiva, volumen, peso, equilibrio e iluminación, entre otros, en referencia a la experiencia del observador en el mundo real.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img11.gif")
      
      #collapse12.collapse(:class="{show: hash == 12}" data-bs-parent='#MapaGroup01')
        .BG03.p-4
          .row.justify-content-center
            .col-7.col-lg-6
              .titulo-segundo.color-secundario
                h2 1.12. Appeal
                p El Appeal se refiere a la personalidad y atractivo del personaje, fiel al significado etimológico de la palabra animación, que es dar ánima, alma y vida, el trabajo del animador es proveer al personaje la solidez y atractivo suficiente para que se cree y mantenga una conexión emocional con el espectador.  En definitiva, el principio de atractivo nos recuerda que la animación de un personaje debe definir su forma de ser, de moverse y sus estados emocionales.
            .col-5.col-lg-4
              img(src="@/assets/curso/tema1/img12.gif")
    separador
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    hash: 0,
  }),
  watch: {
    $route(to) {
      if (to.hash?.length) {
        const numero = to.hash.split('_')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash.length) {
        const numero = this.$route.hash.split('_')[1]
        this.hash = numero
        setTimeout(() => {
          document.getElementById('MapaGroup01').scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      }
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      console.log(document.querySelector('#boton' + id))
      document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass"></style>
