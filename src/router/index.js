import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';
import ListaLibros from '../views/ListaLibros.vue';
import ListaProfesTaller from '../views/ListaProfesTaller.vue';
import ListaProfes from '../views/ListaProfes.vue';

import AvisoLegal from '../views-footer/AvisoLegal.vue';
import Terminos from '../views-footer/Terminos.vue';
import Politicas from '../views-footer/Politicas.vue';
import CancelarSus from '../views-footer/CancelarSus.vue';
import store from '../store/store';

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/lista-libros',
    name: 'ListaLibros',
    component: ListaLibros
  },
  {
    path: '/taller-literario',
    name: 'ListaProfesTaller',
    component: ListaProfesTaller
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/profes',
    name: 'ListaProfes',
    component: ListaProfes
  },
  {
    path: '/aviso-legal',
    name: 'AvisoLegal',
    component: AvisoLegal
  },
  {
    path: '/terminos-y-condiciones',
    name: 'Terminos',
    component: Terminos
  },
  {
    path: '/politicas-de-privacidad',
    name: 'Politicas',
    component: Politicas
  },
  {
    path: '/cancelar-suscripcion',
    name: 'CancelarSus',
    component: CancelarSus
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
});

export default router;