<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'AvisoLegal',
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
  methods: {
    handleLoggedIn(isLoggedIn) {
      this.isLoggedIn = isLoggedIn;
    },
    handleLogout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<template>
  <div>
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <router-view :isLoggedIn="isLoggedIn" @logged-in="handleLoggedIn" />
    <br><br><br>
    <br><br><br>
    <div class="aviso">
      <div class="aviso-texto">
        <h1>Aviso Legal</h1>
        <h2>Fecha de entrada en vigencia: 01-01-2024</h2>
        
        <h3>1. Información del Sitio:</h3>
        <p>Este sitio web es propiedad y está operado por La Multiforme. Toda la información proporcionada en este sitio es solo para fines informativos y no constituye asesoramiento profesional.</p>

        <h3>2. Propiedad Intelectual:</h3>
        <p>Todo el contenido, diseño y propiedad intelectual asociada pertenecen a La Multiforme y están protegidos por leyes de propiedad intelectual.</p>

        <h3>3. Limitación de Responsabilidad:</h3>
        <p>El uso de la información en este sitio es bajo su propio riesgo. No nos hacemos responsables de la precisión, integridad o actualidad de la información proporcionada.</p>

        <h3>4. Enlaces Externos:</h3>
        <p>Este sitio puede contener enlaces a sitios web externos. No nos hacemos responsables de la disponibilidad o contenido de estos sitios enlazados.</p>

        <h3>5. Cambios en la Información:</h3>
        <p>Nos reservamos el derecho de realizar cambios o correcciones en la información proporcionada en este sitio en cualquier momento y sin previo aviso.</p>

        <h3>6. Contacto:</h3>
        <p>Si tiene alguna pregunta o inquietud sobre este aviso legal, comuníquese con nosotros a [correo electrónico].</p>
      </div>
    </div>


    <br><br><br>
    <Footer />
  </div>
</template>

<style scoped>
.aviso{
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: 100px;
    margin-bottom: 50px;
}
.aviso-texto{
    width: 800px;
    text-align: left;
}
h1, h2 {
    color: #5761b2;
    margin-bottom: 20px;
    margin-top: 20px;
}
h2, h3{
  font-size: 20px;
}
h3 {
  text-decoration: underline orange;
}

p {
    color: black;
    text-align: left;
}
@media(max-width: 440px){
    .aviso{
        margin-top: 200px;
        margin-bottom: 150px;
    }
}
@media(max-width: 360px){
    .aviso{
        margin-top: 300px;
        margin-bottom: 250px;
    }
}
</style>
