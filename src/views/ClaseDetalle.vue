<template>
  <div>
    <Navbar />
    <br><br><br><br><br><br>
    <div class="detalle-container">
        <div class="image">
        <img :src="plan.image" />
        </div>

        <div class="info">
          <h1>{{ plan.title }}</h1>

          <p>
              Con este plan vas a tener acceso a los cursos offline y
              más de 30 clases grabadas.
          </p>

          <p><strong>Acceso:</strong> 6 meses</p>
          <p><strong>Precio:</strong> $38600</p>

          <h3>Datos bancarios</h3>
          <p>Banco XXX</p>
          <p>CBU: XXX</p>

          <p class="nota">
              Una vez realizada la transferencia, enviar el comprobante
              por WhatsApp para habilitar la suscripción.
          </p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import PilatesImg from '../assets/paquete-pilates.png';
import YogaImg from '../assets/paquete-yoga.png';
import FlexImg from '../assets/paquete-flexibilidad.png';
export default {
  name: 'ClaseDetalle',
  components: { Navbar,Footer },
  data() {
    return {
      plan: {},
    };
  },
  created() {
    const slug = this.$route.params.slug;

    const planes = {
      'clase-pilates': {
        title: 'Clases grabadas Pilates',
        image: PilatesImg,
      },
        'clase-yoga': {
        title: 'Clases grabadas Yoga',
        image: YogaImg,
      },
      'clase-flexibilidad': {
        title: 'Clases grabadas Flexibilidad',
        image: FlexImg,
      },
    };

    this.plan = planes[slug];
  },
};
</script>

<style scoped>
.detalle-container {
  max-width: 1100px;
  margin: 120px auto;
  padding: 0 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.image img {
  width: 100%;
}
.info h1{
  max-width: 500px;
  color: #5761b2;
  font-size: 30px;
  margin: 20px auto;
   
  padding: 0 24px; 
  text-align: center;
  align-items: center;
  border-bottom: 2px solid #ffa44e; 
  padding-bottom: 5px;
}
.info h3{
  max-width: 500px;
  color: #5761b2;
  font-size: 20px;
  margin: 20px auto;
   
  padding: 0 24px; 
  text-align: center;
  align-items: center;
  border-bottom: 2px solid #ffa44e; 
  padding-bottom: 5px;
}
.nota {
  margin-top: 20px;
  font-size: 14px;
  color: #555;
}
</style>
