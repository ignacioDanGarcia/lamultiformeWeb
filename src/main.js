import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/dist/vuetify.css';
import store from './store/store';

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

store.dispatch('initAuth');

app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');
