import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import SignUp from '../views/SignUp.vue';
import Home from '../views/Home.vue';
import Calendario from '../views/Calendar.vue';

import AvisoLegal from '../views-footer/AvisoLegal.vue';
import Terminos from '../views-footer/Terminos.vue';
import Politicas from '../views-footer/Politicas.vue';
import CancelarSus from '../views-footer/CancelarSus.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  /*{
    path: '/calendario',
    name: 'Calendario',
    component: Calendario
  },*/
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

export default router