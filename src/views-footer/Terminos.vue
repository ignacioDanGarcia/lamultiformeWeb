<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Terminos',
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
        <h1>Términos y condiciones</h1>
        <h2>Fecha de entrada en vigencia: 01-01-2024</h2>
        <p>Bienvenido a nuestro sitio web. Al acceder y utilizar nuestros servicios, usted acepta los siguientes términos y condiciones. Lea cuidadosamente antes de continuar.</p>

        <h3>1. Uso del Sitio:</h3>
        <p>El uso de nuestro sitio web está sujeto a estos términos y condiciones. Nos reservamos el derecho de modificar, suspender o descontinuar cualquier parte del sitio en cualquier momento.</p>

        <h3>2. Registro de Usuario:</h3>
        <p>Al registrarse en nuestro sitio, usted acepta proporcionar información precisa y completa. Es responsabilidad del usuario mantener la confidencialidad de la información de la cuenta y notificar cualquier uso no autorizado.</p>

        <h3>3. Contenido del Usuario:</h3>
        <p>Los usuarios pueden contribuir con contenido, como comentarios y opiniones. Al hacerlo, usted concede a nuestro sitio el derecho irrevocable de utilizar, modificar y mostrar dicho contenido.</p>

        <h3>4. Responsabilidad:</h3>
        <p>No nos hacemos responsables por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de usar nuestro sitio.</p>

        <h3>5. Modificaciones:</h3>
        <p>Nos reservamos el derecho de actualizar o cambiar estos términos y condiciones en cualquier momento sin previo aviso. Se le notificará sobre cambios significativos mediante redes sociales.</p>

        <h3>6. Ley Aplicable:</h3>
        <p>Estos términos y condiciones están regidos por las leyes aplicables en la República Argentina. Cualquier disputa será resuelta en los tribunales de la ciudad de Buenos Aires, renunciando expresamente a cualquier otro fuero o jurisdicción que pudiera corresponder.</p>
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
    margin-top: 250px;
    margin-bottom: 250px;
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
@media(max-width: 400px){
    .aviso{
        margin-top: 600px;
        margin-bottom: 450px;
    }
}
@media(max-width: 320px){
    .aviso{
        margin-top: 700px;
        margin-bottom: 700px;
    }
}
</style>
