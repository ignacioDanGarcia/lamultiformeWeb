<template>
    <div class="fondo">
        <div class="wrapper">
            <h1>¿Olvidaste tu contraseña?</h1>
            <p>Qué fiaca! Indicanos el mail que estabas usando así la podes restaurar!</p>
            <div class="input-box">
                <input type="email" placeholder="Correo electrónico" v-model="email">
            </div>
            <button class="btn" @click="resetPassword">Restablecer Contraseña</button>
            <p><router-link class="router" to="/login">Volver al inicio de sesión</router-link></p>
        </div>
    </div>
  </template>
  
  <script>
  import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
  
  export default {
    name: 'OlvidoContrasenia',
    data() {
      return {
        email: '',
      };
    },
    methods: {
      resetPassword() {
        const auth = getAuth();
  
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            alert('Se ha enviado un correo electrónico para restablecer tu contraseña. Revise su bandeja de entrada.');
            this.$router.push('/login');
          })
          .catch((error) => {
            
            console.error(error);
            alert('Ha ocurrido un error al intentar restablecer la contraseña. Por favor, inténtalo nuevamente.');
          });
      },
    },
  };
  </script>