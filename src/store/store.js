import { createStore } from 'vuex';

import { auth, db } from '../firebase/firebase';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

export default createStore({
  state: {
    user: null,               // datos Firebase
    userProfile: null,        // datos Firestore
    isAuthenticated: false,
    loadingAuth: true,
  },

  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    user: (state) => state.user,
    userProfile: (state) => state.userProfile,
    hasActivePack: (state) => {
      if (!state.userProfile?.packs) return false;
      return state.userProfile.packs.some(p => p.habilitado);
    },
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user;
      state.isAuthenticated = !!user;
    },
    SET_USER_PROFILE(state, profile) {
      state.userProfile = profile;
    },
    CLEAR_USER(state) {
      state.user = null;
      state.userProfile = null;
      state.isAuthenticated = false;
    },
    SET_LOADING_AUTH(state, value) {
      state.loadingAuth = value;
    },
  },

  actions: {
    // 🔐 LOGIN
    async login({ commit, dispatch }, { email, password }) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      commit('SET_USER', res.user);
      await dispatch('fetchUserProfile');
    },

    // 🆕 SIGNUP
    async signup({ commit }, { email, password }) {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const userData = {
        uid: res.user.uid,
        email: res.user.email,
        packs: [],
        createdAt: new Date(),
      };

      await setDoc(doc(db, 'users', res.user.uid), userData);

      commit('SET_USER', res.user);
      commit('SET_USER_PROFILE', userData);
    },

    // 🚪 LOGOUT
    async logout({ commit }) {
      await signOut(auth);
      commit('CLEAR_USER');
    },

    // 📦 TRAER PERFIL DE FIRESTORE
    async fetchUserProfile({ state, commit }) {
      if (!state.user) return;

      const snap = await getDoc(doc(db, 'users', state.user.uid));

      if (snap.exists()) {
        commit('SET_USER_PROFILE', snap.data());
      }
    },

    // 🔁 ESCUCHAR SESIÓN (MUY IMPORTANTE)
    initAuth({ commit, dispatch }) {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          commit('SET_USER', user);
          await dispatch('fetchUserProfile');
        } else {
          commit('CLEAR_USER');
        }
        commit('SET_LOADING_AUTH', false);
      });
    },
  },
});
