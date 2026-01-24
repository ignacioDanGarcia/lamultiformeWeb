<template>
  <div>
    <Navbar />
    <br><br><br><br><br><br>

    <div class="planes-container">
      <div class="titulo-planes"><h1>Planes de Suscripción</h1></div>

      <div class="grid">
        <PlanCarta
          v-for="plan in planes"
          :key="plan.slug"
          :plan="plan"
        />
      </div>
    </div>
    <FaqSuscripciones/>
    <Footer />
  </div>
</template>

<script>
import PlanCarta from '../components/PlanCarta.vue';
import FaqSuscripciones from '../components/FaqSuscripciones.vue';
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import PilatesImg from '../assets/paquete-pilates.png';
import YogaImg from '../assets/paquete-yoga.png';
import FlexImg from '../assets/paquete-flexibilidad.png';

export default {
  name: 'Planes',
  components: { PlanCarta,FaqSuscripciones,Navbar,Footer },
  data() {
    return {
      planes: [
        {
          title: 'Clases grabadas Pilates',
          slug: 'clase-pilates',
          image: PilatesImg,
        },
        {
          title: 'Clases grabadas Yoga',
          slug: 'clase-yoga',
          image: YogaImg,
        },
        {
          title: 'Clases grabadas Flexibilidad',
          slug: 'clase-flexibilidad',
          image: FlexImg,
        },
      ],
    };
  },
};
</script>

<style scoped>
.titulo-planes h1{
  max-width: 500px;
  color: #5761b2;
  font-size: 40px;
  margin: 20px auto;
  margin-bottom: 40px;
  padding: 0 24px; 
  text-align: center;
  align-items: center;
  border-bottom: 2px solid #ffa44e; 
  padding-bottom: 5px;
}
.planes-container {
  max-width: 1200px;
  margin: 120px auto;
  padding: 0 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
@media (max-width: 640px){
  .grid {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 30px;
}
}
</style>

  