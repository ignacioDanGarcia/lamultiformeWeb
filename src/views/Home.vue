<script>
import Navbar from '../components/Navbar.vue';
import Agenda from '../components/Agenda.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Agenda,
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
    <Agenda />
    <br><br><br>
    <Footer />
  </div>
</template>

<style scoped>

</style>
