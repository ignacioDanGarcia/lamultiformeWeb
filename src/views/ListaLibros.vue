<template>
    <div>
      <Navbar />
      <br><br><br><br><br><br>
      <div class="book-list">
        <Libro
          v-for="(book, index) in books"
          :key="index"
          :title="book.title"
          :summary="book.summary"
          :image="book.image"
          :reverseOrder="index % 2 !== 0"
        />
      </div>
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import Libro from '../components/Libro.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Libro,
      Footer,
    },
    data() {
      return {
        books: [
          {
            title: 'Relatos Multiformes',
            summary: 'Cuando empezamos a pergeñar esta alocada idea de convidar con un Taller Literario en el Espacio Cultural Lamultiforme, en el corazón de nuestro querido barrio de Munro; ni por asomo se nos hubiera ocurrido calcular la diversa y concurrida respuesta que vino a confluir para disfrutar de la literatura.<br><br>Podemos asegurar, después de este camino recorrido durante el año, que el proceso creativo vive y se desarrolla en la ósmosis que se produce entre la lectura y la escritura. En ambas prácticas hay ciertos ritos disparadores que contagian, que hacen crecer esa semilla a medio germinar que existe en cada persona. Entonces, las distancias entre generaciones se acortan, el bagaje cultural y subjetivo diverso se comparte, se disfrutan las voces clásicas y las voces nacientes, los estilos se replican y confunden. Cada vienes, aprendemos a sumergimos, con naturalidad, en las influencias compartidas. Con el infaltable tecito, las facturas y el olor de los libros; inmersos en esa concentración que nos distingue a quienes amamos nadar entre palabras y frases; soñamos otras realidades, otros mundos (a veces, sórdidos y extraños; a veces, contradictorios y diáfanos).',
            image: '/ebookrelatosmultiformes1.png'
          },
          {
            title: 'Avenida Mitre',
            summary: 'La publicación de un segundo libro plantea la continuídad de un trabajo colectivo en torno a la ficción, en el que las transformaciones de la Avenida Mitre funcionan como sinécdoque del barrio y sus etapas de evolución. Dicha avenida constituye la columna vertebral de Munro y un punto neurálgico en que confluyen tradición e innovación. Se trata de sacar la literatura a la calle y reconocernos como parte activa de un mapa urbano y cultural pleno de dinamismo. Este movimiento implica una apuesta por la diversidad. Para ello, partimos de cuatro momentos históricos y espacios representativos:<br><br>  1- década del 40, esplendor del cine argentino, Museo Lumiton <br> 2- década del 70, antesala de la dictadura, Casa de la memoria "Nono Lizaso” <br> 3- los 80, primavera democrática, "Capital nacional de la indumentaria”. <br> 4- 2015 hasta hoy, nuevo mapa comercial, bares y movida nocturna. <br><br> Estos momentos (y los sucesos reales) obran de disparadores para la creación de textos ficcionales de diversos géneros. La literatura funciona, entonces, como herramienta y documento de identidad colectiva.',
            image: '/ebookavenidamitre1.png'
          },
          // Agrega más libros aca
        ]
      };
    }
  }
  </script>
  
  <style scoped>
  .book-list {
    margin: 20px 0;
  }
  * {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('../assets/simbolo_om_naranja.png') no-repeat center center fixed;
    background-size: cover; 
  }
  </style>
  