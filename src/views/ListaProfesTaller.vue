<template>
    <div>
      <Navbar />
      <br><br><br><br><br><br>
      <div class="book-list">
        <ProfeTaller
          v-for="(profe, index) in profes"
          :key="index"
          :nombre="profe.nombre"
          :resumen="profe.resumen"
          :imagen="profe.imagen"
          :reverseOrder="index % 2 !== 0"
        />
      </div>
      <Alumnos />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue';
  import ProfeTaller from '../components/ProfeTaller.vue';
  import Footer from '../components/Footer.vue';
  import Alumnos from '../components/Alumnos.vue';

  export default {
    components: {
      Navbar,
      ProfeTaller,
      Footer,
      Alumnos,
    },
    data() {
      return {
        profes: [
          {
            nombre: 'Fabio Martorelli',
            resumen: 'Este es Feibius bla bla bla <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imagen: '/fabio.png'
          },
          {
            nombre: 'Paola Leguizamón',
            resumen: 'Esta es paola bla bla bla  <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            imagen: '/pao.png'
          },
          // Agrega mas tipos aca
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
  