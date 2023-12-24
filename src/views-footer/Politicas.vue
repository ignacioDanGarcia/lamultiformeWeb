<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Politicas',
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
  <div class="politicas">
    <Navbar :isLoggedIn="isLoggedIn" @logout="handleLogout" />
    <router-view :isLoggedIn="isLoggedIn" @logged-in="handleLoggedIn" />
    <br><br><br>
    <br><br><br>
    <div class="aviso">
      <div class="aviso-texto">
        <h1>Política de Privacidad</h1>
        <h2>Fecha de entrada en vigencia: 01-01-2024</h2>
        <p>Bienvenido a nuestro sitio web. La privacidad de nuestros usuarios es de suma importancia para nosotros. Esta política de privacidad detalla cómo recopilamos, utilizamos, divulgamos y protegemos la información personal que obtenemos a través de nuestro sitio web.</p>

        <h3>1. Información que Recopilamos:</h3>
        <p>Recopilamos información personal cuando los usuarios se registran en nuestra plataforma, solicitan actividades específicas, y participan en nuestras interacciones en línea.
        <br>
            La información que recopilamos puede incluir, pero no se limita a:
            <ul>
                <li>Nombre</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Información de pago (cuando sea aplicable)</li>
            </ul>
        </p>

        <h3>2. Uso de la Información Recopilada:</h3>
        <p>Al registrarse en nuestro sitio, usted acepta proporcionar información precisa y completa. Es responsabilidad del usuario mantener la confidencialidad de la información de la cuenta y notificar cualquier uso no autorizado.</p>

        <h3>3. Protección de la Información:</h3>
        <p>Implementamos medidas de seguridad para proteger la información personal de nuestros usuarios. Sin embargo, no podemos garantizar la seguridad completa de la información transmitida a través de internet.</p>

        <h3>4. Enlaces a Otros Sitios Web:</h3>
        <p>Nuestro sitio web puede contener enlaces a otros sitios web. No nos hacemos responsables de las prácticas de privacidad de estos sitios y recomendamos que los usuarios revisen las políticas de privacidad de cada sitio al que acceden.</p>

        <h3>5. Cambios en la Política de Privacidad:</h3>
        <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Se notificarán los cambios significativos a los usuarios a través de nuestro sitio web y/o redes sociales.</p>

        <h3>6. Cancelación por Faltas a Clases:</h3>
        <p>Si te ausentas sin previo aviso y sin una justificación válida a más de tres clases consecutivas, nos reservamos el derecho de dar de baja tu servicio de manera automática.</p>

        <h3>7. Contacto:</h3>
        <p>Para cualquier pregunta o inquietud relacionada con nuestra política de privacidad, comuníquese con nosotros a [correo electrónico].</p>
      </div>
    </div>

    <div class="footer">
        <br><br><br>
        <Footer />
    </div>    
  </div>
</template>

<style scoped>

.footer{
    margin-top: 10px;
    margin-bottom: 10px;
}
.aviso{
    min-height: 400px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: 250px;
    margin-bottom: 250px;
    padding-bottom: 20px;
    justify-content: space-between;
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
@media(max-width: 580px){
    .aviso{
        margin-top: 500px;
        margin-bottom: 500px;
    }
}
@media(max-width: 400px){
    .aviso{
        margin-top: 700px;
        margin-bottom: 550px;
    }
}
@media(max-width: 320px){
    .aviso{
        margin-top: 900px;
        margin-bottom: 900px;
    }
}
</style>
