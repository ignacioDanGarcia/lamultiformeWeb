<script>
import Navbar from '../components/Navbar.vue';
import Agenda from '../components/Agenda.vue';
import Footer from '../components/Footer.vue';
import Consultas from '../components/Consultas.vue';
import ClasesBotones from '../components/ClasesBotones.vue';
import NuestrasProfes from '../components/NuestrasProfes.vue';
export default {
  name: 'Home',
  components: {
    Navbar,
    Agenda,
    Footer,
    Consultas,
    ClasesBotones,
    NuestrasProfes,
  },
  data() {
    return {
      profes: [
          {
            nombre: 'SOMOS SUSANA ACKERMAN Y BERENICE ACKERMAN',
            resumen: 'Lamultiforme nace en 2009 blablablá con el propósito de blablablá. Luego de la pandemia comenzamos a notar la necesidad de un espacio cultural donde las personas del barrio pudieran concurrir a cuidar de su salud y aumentar su bienestar cotidiano y ese comenzó a ser nuestro objetivo. Susana Ackerman es una de las coordinadoras del espacio, es licenciada en blablablá, especializada en blablablá, profesora de pilates blablablá, comprometida con blablablá. Berenice Ackerman es profesora de pilates y blablablá, comprometida. Nuestra misión es blablá. ',
            imagen: '/susyberu.jpeg'
          },
      ],
    }
  }
};
</script>

<template>
  <div class="home-container">
    <Navbar  />
    <router-view  />
    <div class="foto-fondo">
      <img src="..\assets\home_camas.jpeg" alt="Descripción de la imagen" >
      <div class="titulo">
        <h1>LAMULTIFORME</h1>
        <h2>Bienestar y salud para vos</h2>
        <div class="boton-contacto">
            <button><a class="boton-contacto-text" href="https://wa.me/5491126825124">Agendá tu primera clase!</a></button>
            </div>
      </div>
    </div>
    <div class="home-content">
      <ClasesBotones />
    </div>
    <div class="profe-list">
      <NuestrasProfes
        v-for="(profe, index) in profes"
        :key="index"
        :nombre="profe.nombre"
        :resumen="profe.resumen"
        :imagen="profe.imagen"
        :reverseOrder="index % 2 !== 0"
      />
    </div>
    <div class="home-content">
      <Agenda />
      <Consultas />
    </div>
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
  height: 800px;
  min-height: 300px;
  object-fit: cover;
  object-position: center;
}
.home-content {
  max-width: 1200px;    
  margin: 0 auto;       
  padding: 0 24px;      
}

.titulo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.titulo h1{
  margin-top: auto;
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translate(0%, -50%);
  color: #fff;
  font-size: 4em;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
.titulo h2{
  margin-top: auto;
  position: absolute;
  top: 52%;
  left: 20%;
  transform: translate(0%, -50%);
  color: #fff;
  font-size: 2em;
  text-shadow:
    -1px -1px 0 #000,
     1px -1px 0 #000,
    -1px  1px 0 #000,
     1px  1px 0 #000;
}
.boton-contacto{
    text-align: center;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.boton-contacto-text:hover{
    background-color: #fff;
    color: #ffa44e;
    opacity: 0.7;
}
.boton-contacto-text{
    text-decoration: none;
    color: #000;
    font-size: 25px;
    margin-bottom: 50px;
    background-color: #ffa44e;
    padding: 20px; 
    border-radius: 20px 20px 0 20px;
    width: auto;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 60%;
    left: 20%;
    transition: background-color 0.3s;
}
@media(max-width: 630px){
    .titulo h1{
      font-size: 2em;
    }
    .titulo h2{
    font-size: 1em;
    }
}
.profe-list {
  
  margin: 10px 10px;
  padding: 10px 10px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
                url('../assets/simbolo_om_naranja.png') no-repeat center center fixed;
   background-size: cover; 
}
</style>
