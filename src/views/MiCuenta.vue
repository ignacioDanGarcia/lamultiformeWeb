<template>
  <div>
    <Navbar />
    <br><br><br><br><br><br>
    <div class="mi-cuenta-container">
    <aside class="sidebar">
      <h3>Mi cuenta</h3>
      <ul>
        <li
          :class="{ active: activeSection === 'suscripciones' }"
          @click="activeSection = 'suscripciones'"
        >
          Mis suscripciones On Demand
        </li>

        <li
          :class="{ active: activeSection === 'turnos' }"
          @click="activeSection = 'turnos'"
        >
          Turnos presenciales
        </li>

        <li class="logout" @click="logout">
          Cerrar sesión
        </li>
      </ul>
    </aside>

    <section class="content">
      <Suscripciones v-if="activeSection === 'suscripciones'" />

      <TurnosPresenciales v-if="activeSection === 'turnos'" />
    </section>
  </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import Clases from '../components/Clases.vue';
import Suscripciones from '../components/mi-cuenta/Suscripciones.vue';
import TurnosPresenciales from '../components/mi-cuenta/TurnosPresenciales.vue';
export default {
  components: {
    Navbar,
    Footer,
    Clases,
    TurnosPresenciales,
    Suscripciones,
  },
  name: 'MiCuenta',
  data() {
    return {
      activeSection: 'suscripciones',
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout');
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
  .mi-cuenta-container {
  max-width: 1200px;
  margin: 120px auto 40px;
  padding: 0 24px;
  display: flex;
  gap: 40px;

}

.sidebar {
  width: 260px;
  border-right: 1px solid #ddd;
}

.sidebar h3 {
  margin-bottom: 20px;
  color: #5761b2;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  padding: 12px 10px;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 8px;
  transition: background 0.2s;
  color: #5761b2;
}

.sidebar li:hover {
  background: #f0f0f0;
}

.sidebar li.active {
  background: #5761b2;
  color: white;
}

.sidebar li.logout {
  margin-top: 30px;
  color: #c0392b;
  font-weight: bold;
}

.content {
  flex: 1;
}
</style>
