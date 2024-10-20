<script>
import Navbar from '../components/Navbar.vue';
import Agenda from '../components/Agenda.vue';
import Footer from '../components/Footer.vue';
import Consultas from '../components/Consultas.vue';
import Clases from '../components/Clases.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Agenda,
    Footer,
    Consultas,
    Clases,
  },

};
</script>

<template>
  <div>
    <Navbar  />
    <router-view  />
    <div class="foto-fondo">
      <img src="..\assets\home_camas.jpeg" alt="Descripción de la imagen" >
      <div class="titulo">
        <h1>La Multiforme</h1>
        <!--<h2>Un espacio para practicar Yoga, Pilates y hacer arte</h2>-->
      </div>
      
    </div>
    
    <Agenda />
    <Clases  />
    <Consultas  />
    <Footer />
  </div>
</template>

<style scoped>
.foto-fondo{
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
}
.foto-fondo img{
  margin: 20px 0;
  width: 100%;
  height: 1000px;
  min-height: 300px;
  object-fit: cover;
  object-position: center;
}

.titulo h1{
  margin-top: auto;
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translate(0%, -50%);
  color: #fff;
  font-size: 4em;
}

@media(max-width: 630px){
    .titulo h1{
      font-size: 2em;
    }
}
</style>
