import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.css';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import store from './store/store.js';

const firebaseConfig = {
  apiKey: "AIzaSyBiWNKU1XQWPCsx7ddE4A-HZz_ATwD-A_c",
  authDomain: "multiforme-prueba.firebaseapp.com",
  projectId: "multiforme-prueba",
  storageBucket: "multiforme-prueba.appspot.com",
  messagingSenderId: "392964231935",
  appId: "1:392964231935:web:754130ecd56d54dabe72ca"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth_ = getAuth(firebaseApp);



const app = createApp(App);
const vuetify = createVuetify({
  theme: {
    primary: '#1976D2',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  icons: {
    iconfont: 'mdiSvg'
  },
});

app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');

export { auth_, firebaseApp };