<template>
	<div class="fondo">
		<img class="foto" src="../assets/simbolo_om_naranja.png" alt="">
		<div class="wrapper">
			<h1>Ingresá</h1>
			<div class="input-box">
				<input type="email" placeholder="Email" v-model="email">
			</div>
			<div class="input-box">
				<input type="password" placeholder="Password" v-model="password">
			</div>
			<button class="btn" @click="login">Ingresá</button>
			<p>¿Todavía no tenés una cuenta? <router-link class="router" to="/signup">Registrate acá!</router-link></p>
      <p>¿Olvidaste tu contraseña? <router-link class="router" to="/restaurar-pass">Restaurala acá!</router-link></p>
		</div>
	</div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(
          (userCredential) => {
            const uid = userCredential.user.uid;
            this.$store.commit('setUser', uid);
            this.$store.commit('setAuth', true);
            localStorage.setItem('isAuthenticated', true);
            this.$router.push('/calendario');
          },
          (err) => {
            this.handleFirebaseError(err);
          }
        )
        .catch((error) => {
          console.error("Error during login:", error);
        });
    },
    handleFirebaseError(error) {
      const errorMessages = {
        'auth/user-not-found': 'La cuenta no existe. Regístrate para crear una nueva cuenta.',
        'auth/wrong-password': 'La contraseña es incorrecta. Intenta nuevamente.',
        // agregar más mensajes de error si es necesario
      };

      const errorMessage = errorMessages[error.code] || 'Hubo un error. Inténtalo nuevamente.';

      alert(errorMessage);
    },
  },
};

</script>

<style>
.fondo{
	position: relative;
	background: #5761b2;
	color: #ebe4dc;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
}
.foto {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  position: relative;
  z-index: 1;
  width: 420px;
  border-radius: 10px;
  padding: 30px 40px;
  border: 2px solid #c4bfb9;
  background: transparent;
  backdrop-filter: blur(30px);
  box-shadow: 0 0 10px rgb(146, 146, 146);
}
.wrapper h1{
	font-size: 36px;
	text-align: center;
	font-weight: 800;
}
.wrapper .input-box{
	width: 100%;
	height: 50px;
	margin: 30px 0;
}
.input-box input{
	width: 100%;
	height: 100%;
	background: transparent;
	border: 2px solid #c4bfb9;
	outline: none;
	border-radius: 40px;
	color: white;
	font-size: 16px;
	padding: 20px 45px 20px 20px;
}
.input-box input::placeholder{
	color: #c4bfb9;
}
.wrapper .btn{
	width: 100%;
	height: 45px;
	background: #ebe4dc;
	border: none;
	outline: none;
	border-radius: 40px;
	cursor: pointer;
	font-size: 16px;
	color: black;
	font-weight: 600;
}
p{
	text-align: center;
	margin: 20px 0 15px;
}
.wrapper .btn:hover{
	background: #c4bfb9;
}
.router{
	color: #ebe4dc;
	text-decoration: none;
	font-weight: 600;
}
@media (max-width: 839px) {
  .fondo {
    padding: 0 10px;
  }

  .wrapper {
    width: 100%;
    max-width: none;
  }

  .wrapper h1 {
    font-size: 24px;
  }

  .input-box {
    margin: 15px 0;
  }

  .input-box input {
    font-size: 12px;
    padding: 10px 20px 10px 10px;
  }

  .wrapper .btn {
    height: 30px;
    font-size: 12px;
  }

  p {
    margin: 10px 0; 
  }
}
</style>