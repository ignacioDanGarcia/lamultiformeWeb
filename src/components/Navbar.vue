<template>
        <nav>
            <a href="/" class="logo">
                <img src="../assets/multiforme_logo.png" alt="logo">
            </a>
            <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="check">
            <ul class="menu">
                <li><router-link to="/">La multi</router-link></li>
                <li><router-link to="/">Profes</router-link></li>
                <li><router-link to="/">Talleres</router-link></li>
                <li><router-link to="/">Libros</router-link></li>
                <li v-if="isAuthenticated"><router-link v-if="isAuthenticated" to="/calendario">Calendario</router-link></li>
                <li v-if="isAuthenticated"><router-link to="/"><button @click="logout">Cerrar sesión</button></router-link></li>
                <li v-else><router-link to="/login">Iniciar sesión</router-link></li>
            </ul>
            
        </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isAuthenticated() {
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    logout() {
      const auth = this.$store.state.manualLogout
        ? this.$store.commit('setManualLogout', false) // Si es un cierre de sesión manual, restablece la variable
        : this.$store.commit('setAuth', false); // Si no es manual, cierra la sesión normalmente

      this.$router.push('/');
    },
  },
};
</script>


<style scoped>
nav{
    position:absolute;
    top:0;
    left: 0;
    margin: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10000;
    background: #5761b2;
}

nav img{
    width: 80px;
    height: auto;
}

nav ul{
    display: flex;
    justify-content: center;
    align-items: center;

}
nav ul li{
    list-style: none;
    display: inline-block;
    margin: 20px;
    position: relative;

}
nav ul li a{
    text-decoration:  none;
    padding: 6px 15px;
    color: #fff;
}

nav ul li a::after{
    content: '';
    height: 3px;
    width: 0;
    background: #ffa44e;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
}
nav ul li a:hover::after{
    width: 100%;
}
.checkbtn{
    font-size: 30px;
    color: white;
    float: right;
    line-height: 80px;
    margin-right: 10px;
    cursor: pointer;
    display: none;
}
#check{
    display: none;
}
@media (max-width: 858px){
    .checkbtn{
        display: block;
    }
    nav ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: #363c6d;
        top: 80px;
        left: -100%;
        text-align: center;
        flex-direction: column;
        transition: all .5s;
    }
    nav ul li{
        display: block;
        margin-bottom: 10px;
        line-height: 30px;
    }
    #check:checked + ul {
        left: 0;
    }
}
</style>
