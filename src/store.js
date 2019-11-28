import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    movies: [],
    user: null,
    isAuthenticated: false,
    userMovies: []
  },
  mutations: {
    setMovies(state, payload) {
      state.movies = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserMovies(state, payload) {
      state.userMovies.push(payload);
    },
    clearMovies(state) {
      state.userMovies = [];
    }
  },

  actions: {
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    addMovie({ state }, payload) {
      let movie = {
        movieId: payload.id,
        watched: false
      };
      console.log("added");
      firebase
        .database()
        .ref("users")
        .child(state.user.user.uid)
        .push(movie);
    },
    isWatchedMovie({ dispatch, state }, payload) {
      let movie = {
        movieId: payload.id,
        watched: !payload.watched
      };
      firebase
        .database()
        .ref("users/" + state.user.user.uid)
        .child(payload.firebaseId)
        .update(movie)
        .then(() => {
          console.log("updated");
          dispatch("getUserMovies");
        });
    },
    removeMovie({ dispatch, state }, payload) {
      firebase
        .database()
        .ref("users/" + state.user.user.uid)
        .child(payload.firebaseId)
        .remove()
        .then(() => {
          console.log("deleted");
          dispatch("getUserMovies");
        });
    },
    getUserMovies({ state, commit }) {
      commit("clearMovies");
      return firebase
        .database()
        .ref("users/" + state.user.user.uid)
        .once("value", async snapshot => {
          let id;
          for (const key in snapshot.val()) {
            id = snapshot.val()[key];
            const urls = `https://api.themoviedb.org/3/movie/${id.movieId}?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US`;
            const responses = await fetch(urls);
            let data = await responses.json();
            if (responses.ok) {
              data.watched = id.watched;
              data.firebaseId = key;
              commit("setUserMovies", data);
            } else {
              console.log("error");
            }
          }
        });
    }
  },

  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
