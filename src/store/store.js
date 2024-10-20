import { createStore } from 'vuex';
export default createStore({
  state: {
    firestore: null,
  },
  mutations: {
    setFirestore(state, firestore) {
      state.firestore = firestore;
    },
  },
});
