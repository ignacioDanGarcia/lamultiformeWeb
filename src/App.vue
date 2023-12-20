<script>
import SignUp from './components/SignUp.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import Agenda from './components/Agenda.vue'
export default{
  name: 'App',
  components:{
    SignUp,
    Navbar,
    Footer,
    Agenda
  }
}
</script>

<template>
<div>
  <Navbar />
  <br><br><br>
  <Agenda />
  <br><br><br>
  <Footer />
  </div>
</template>

<style scoped>

</style>
