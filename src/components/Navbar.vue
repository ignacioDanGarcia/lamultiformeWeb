<template>
        <nav :class="{ shrink: isShrink }">
            <div class="nav-container">
                <a href="/" class="logo">
                <img src="../assets/multiforme_logo.png" alt="logo">
                </a>

                <label for="check" class="checkbtn">
                <i class="fa-solid fa-bars"></i>
                </label>

                <input type="checkbox" id="check">

                <ul class="menu">
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/clases">Clases</router-link></li>
                <li><router-link to="/clases-grabadas">Clases grabadas</router-link></li>
                <li><router-link to="/lista-libros">Libros</router-link></li>
                <li v-if="isAuthenticated" class="mi-cuenta">
                    <router-link to="/mi-cuenta">
                    <i class="fa-solid fa-user"></i>
                    <span>Mi cuenta</span>
                    </router-link>
                </li>
                <li v-else>
                    <router-link to="/login">Iniciar sesión</router-link>
                </li>
                </ul>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isShrink: false,
    };
  },
  computed: {
    isAuthenticated() {
      if (localStorage.getItem('isAuthenticated') == 'true') {
        this.$store.commit('setAuth', true);
      }
      return this.$store.state.isAuthenticated;
    },
  },
  methods: {
    logout() {
      this.$store.commit('setAuth', false);
      this.$store.commit('setUser', null);
      localStorage.setItem('isAuthenticated', false);
      this.$router.push('/');
    },
    handleScroll() {
      this.isShrink = window.scrollY > 50;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};

</script>


<style scoped>
nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #5761b2;
    z-index: 10000;
    transition: padding 0.3s ease, box-shadow 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav img{
    width: 80px;
    height: auto;
}

nav.shrink .nav-container {
    padding: 15px 24px;
}

nav.shrink img {
    width: 60px;
}

nav.shrink {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
.mi-cuenta a {
  display: flex;
  flex-direction:row;
  align-items: center;
}

.mi-cuenta i {
  font-size: 0.85em;
  margin-right: 15px;
}
.menu{
    display: flex;
    justify-content: center;
    align-items: center;

}
.menu li{
    list-style: none;
    display: inline-block;
    margin: 20px;
    position: relative;

}
.menu li a{
    text-decoration:  none;
    padding: 6px 15px;
    color: #fff;
}

.menu li a::after{
    content: '';
    height: 3px;
    width: 0;
    background: #ffa44e;
    position: absolute;
    left: 0;
    bottom: -10px;
    transition: 0.5s;
}
.menu li a:hover::after{
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
    .menu{
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
    .menu li{
        display: block;
        margin-bottom: 10px;
        line-height: 30px;
    }
    #check:checked + ul {
        left: 0;
    }
}
</style>
