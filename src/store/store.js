import { createStore } from 'vuex';
export default createStore({
  state: {
    isAuthenticated: false,
    user: null,
    firestore: null,
  },
  mutations: {
    setAuth(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
    setUser(state, user) {
      state.user = user;
    },
    setFirestore(state, firestore) {
      state.firestore = firestore;
    },
  },
});
