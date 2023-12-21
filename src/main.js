import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiWNKU1XQWPCsx7ddE4A-HZz_ATwD-A_c",
  authDomain: "multiforme-prueba.firebaseapp.com",
  projectId: "multiforme-prueba",
  storageBucket: "multiforme-prueba.appspot.com",
  messagingSenderId: "392964231935",
  appId: "1:392964231935:web:754130ecd56d54dabe72ca"
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount('#app');

