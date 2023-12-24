<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'CancelarSus',
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
        <h1>Cancelar la Suscripción</h1>
        <h2>Fecha de entrada en vigencia: 01-01-2024</h2>
        <p>Bienvenido/a a La Multiforme Web.
          <br><br>
          Agradecemos tu participación en nuestro servicio de suscripción. Si en algún momento decides cancelar tu suscripción, a continuación te proporcionamos las instrucciones necesarias:</p>
        <h2>Instrucciones para Cancelar la Suscripción:</h2>
        
        <h3>1. WhatsApp:</h3>
        <p>
          <ul>
                <li>Abre la aplicación WhatsApp en tu dispositivo.</li>
                <li>Busca nuestro número de contacto: +54 9 11 2682-5124</li>
                <li>Envía un mensaje con el texto "Cancelar Suscripción" seguido de tu nombre de usuario o información de cuenta relacionada.</li>
            </ul>
        </p>

        <h3>2. Instagram:</h3>
        <p>
          <ul>
                <li>Inicia sesión en tu cuenta de Instagram.</li>
                <li>Busca nuestro perfil: @lamultiforme</li>
                <li>Envía un mensaje con el texto "Cancelar Suscripción" seguido de tu nombre de usuario o información de cuenta relacionada.</li>
            </ul>
        </p>

        <h3>Importante:</h3>
        <p>
          <ul>
                <li>Asegúrate de proporcionar la información correcta para facilitar el proceso de cancelación.</li>
                <li>Tu solicitud de cancelación será procesada dentro de un plazo de 10 días hábiles.</li>
                <li>Si experimentas problemas o necesitas asistencia adicional, no dudes en contactarnos a través de nuestras redes sociales.</li>
                <li>Cabe destacar la política sobre Cancelación por Faltas a Clases. Si te ausentas sin previo aviso y sin una justificación válida a más de tres clases consecutivas, nos reservamos el derecho de dar de baja tu servicio de manera automática.</li>
            </ul>
        </p>
        <p>Agradecemos tu comprensión y esperamos que hayas disfrutado de tu experiencia con nosotros.
          <br><br>
          Atentamente,<br>
          El Equipo de La Multiforme Web.</p>
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
    margin-top: 150px;
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
@media(max-width: 624px){
    .aviso{
        margin-top: 300px;
        margin-bottom: 250px;
    }
}
@media(max-width: 435px){
    .aviso{
        margin-top: 400px;
        margin-bottom: 350px;
    }
}
@media(max-width: 345px){
    .aviso{
        margin-top: 700px;
        margin-bottom: 650px;
    }
}
</style>
