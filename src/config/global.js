export default {
  global: {
    componenteFormativo: 'Animación básica y avanzada',
    descripcionCurso:
      'Mediante este componente, el aprendiz podrá conocer y aplicar los principios de animación en la asignación de movimiento de personajes y objetos que forman una composición animada. Se afianzará en lo referente a maquetación o <em>layout</em> para dar orden a escenas y otras acciones claves del proceso de un plano animado; ello, teniendo en cuenta aspectos como la pantomima, el <em>lipsync</em> y la actuación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Principios de la animación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Estirar y encoger',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Anticipación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Puesta en Escena',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Acción directa y pose',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Overlapping',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Easy In & Easy Out',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Arcos',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Acción secundaria',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Timing',
            hash: 't_1_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.10',
            titulo: 'Exageración',
            hash: 't_1_10',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.11',
            titulo: 'Solidez',
            hash: 't_1_11',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.12',
            titulo: 'Appeal',
            hash: 't_1_12',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Layout: elementos principales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Proceso de un plano animado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Pantomima',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Acting',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Expresiones faciales',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Lipsync  ',
            hash: 't_4_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Bordone, M. (2015). Sincronización automática de movimientos labiales para programas de animación mediante análisis de audio en español. Universidad Nacional de Córdoba.',
      link: 'https://bit.ly/3DhzOI6',
    },
    {
      referencia:
        'Casal, E. (2015). El movimiento en un solo cuadro. Universidad Nacional de La Plata.',
      link:
        'https://chilemonos.cl/tesinas/Narrativa%20Visual%20-%20layout%20y%20composicion%20como%20un%20storytelling.pdf',
    },
    {
      referencia:
        'García, G. (2016). Beyong. Concept y Producción de un cortometraje de animación. Universidad Politécnica de Valencia.',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/92807/GARC%c3%8dA%20-%20Beyond%3a%20Concept%20y%20Producci%c3%b3n%20de%20un%20cortometraje%20de%20animaci%c3%b3n.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Cortés, J. (2021). Proceso de la animación tradicional. Notodoanimacion.',
      link:
        'https://www.notodoanimacion.es/proceso-crear-animacion-tradicional-2d/',
    },
    {
      referencia:
        'Rubio, A. (2006). La postproducción cinematográfica en la era digital: efectos expresivos y narrativos. Universidad Jaume.',
      link: 'https://www.tdx.cat/handle/10803/10457',
    },
    {
      referencia: 'Zlackman',
      link: 'https',
    },
  ],
  glosario: [
    {
      termino: '<em>>Animation</em>',
      significado:
        'Proceso utilizado por uno o más animadores para dar la sensación de movimiento a imágenes o dibujos o a otro tipo de objetos inanimados.',
    },
    {
      termino: '<em>Layout</em>',
      significado:
        'Etapa en la cual se determina la posición de los personajes, se planifica la puesta en escena y los tiempos, así como el ángulo y la posición de la cámara, de dónde proviene la luz y cómo se proyectan las sombras.',
    },
    {
      termino: 'Lenguaje corporal',
      significado:
        'Tipo de lenguaje que solo hace uso de las expresiones del cuerpo y el rostro para comunicar',
    },
    {
      termino: '<em>Lipsync</em>',
      significado:
        'Sincronización entre la gesticulación vocal de un personaje y la voz o diálogo que se escucha',
    },
    {
      termino: 'Pantomima',
      significado:
        'Tipo de lenguaje que usa poses, movimientos y gesticulaciones específicas para comunicar y transmitir, sin hacer uso de la voz',
    },
    {
      termino: 'Postproducción',
      significado:
        'Etapa posterior a la producción la cual incluye edición, color, luminosidad y el contraste de los diferentes planos, efectos especiales.',
    },
    {
      termino: 'Preproducción',
      significado:
        'Etapa anterior a la producción en la cual se prepara el material: Diseño, color script, animática, <em>storyboard</em>.',
    },
    {
      termino: 'Producción',
      significado:
        'Etapa de la producción en la cual se madura la historia, se genera el plan de trabajo, diseña y establecen los cronogramas a cumplir dentro de un proceso de producción.',
    },
    {
      termino: '<em>Software</em>',
      significado:
        'Conjunto de programas, instrucciones y reglas informáticas que permiten ejecutar distintas tareas en un sistema informático.',
    },
  ],
  complementario: [
    {
      texto:
        'García, G. (2016). Beyong. Concepto y Producción de un cortometraje de animación.',
      tipo: 'Documento',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/92807/GARC%c3%8dA%20-%20Beyond%3a%20Concept%20y%20Producci%c3%b3n%20de%20un%20cortometraje%20de%20animaci%c3%b3n.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'A tiempo. (2018). Layout y animatic de corto Condorito “La Gota” (Video). YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ypIVsNW-PCY',
    },
    {
      texto:
        'Flores, M. (2019). Narrativa Visual. Layout y composición como storytelling. Universidad Mayor.',
      tipo: 'Documento',
      link:
        'https://chilemonos.cl/tesinas/Narrativa%20Visual%20-%20layout%20y%20composicion%20como%20un%20storytelling.pdf',
    },
    {
      texto:
        'Rubio, A. (2006). La postproducción cinematográfica en la era digital: efectos expresivos y narrativos. Universidad Jaume.',
      tipo: 'Documento',
      link:
        'https://www.tdx.cat/bitstream/handle/10803/10457/rubio.pdf;jsessionid=8EA0629E629762A25D51D99C342CDA73?sequence=1',
    },
    {
      texto:
        'Casal, E. (2015). El movimiento en un solo cuadro. Universidad Nacional de La Plata.',
      tipo: 'Ensayo',
      link: 'https://bit.ly/2WJkGUj',
    },
    {
      texto:
        'Bordone, M. (s.f.). Sincronización automática de movimientos labiales para programas de animación mediante análisis de audio en español. Universidad Nacional del Córdoba.',
      tipo: 'Documento',
      link:
        'https://rdu.unc.edu.ar/bitstream/handle/11086/2813/TF17231.pdf?isAllowed=y&sequence=1',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
