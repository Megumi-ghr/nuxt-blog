import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      posts: [
        { title: "タイトル1" },
        { title: "タイトル2" }
      ]
    })
  })
}

export default createStore;