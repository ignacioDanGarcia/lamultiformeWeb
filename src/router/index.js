import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import ListaLibros from '../views/ListaLibros.vue';
import Clases from '../views/Clases.vue';
import MiCuenta from '../views/MiCuenta.vue';
import ClasesGrabadas from '../views/ClasesGrabadas.vue';
import ClaseDetalle from '../views/ClaseDetalle.vue';

import AvisoLegal from '../views-footer/AvisoLegal.vue';
import Terminos from '../views-footer/Terminos.vue';
import Politicas from '../views-footer/Politicas.vue';
import CancelarSus from '../views-footer/CancelarSus.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },

  {
    path: '/mi-cuenta',
    name: 'MiCuenta',
    component: MiCuenta,
    meta: { requiresAuth: true },
  },

  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'SignUp', component: SignUp },

  { path: '/lista-libros', name: 'ListaLibros', component: ListaLibros },
  { path: '/clases', name: 'Clases', component: Clases },
  { path: '/clases-grabadas', name: 'ClasesGrabadas', component: ClasesGrabadas },
  {
    path: '/clases-grabadas/:slug',
    name: 'ClaseDetalle',
    component: ClaseDetalle,
  },

  { path: '/aviso-legal', component: AvisoLegal },
  { path: '/terminos-y-condiciones', component: Terminos },
  { path: '/politicas-de-privacidad', component: Politicas },
  { path: '/cancelar-suscripcion', component: CancelarSus },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
