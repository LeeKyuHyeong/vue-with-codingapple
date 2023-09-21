import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: 'sj',
      age: 29,
      likes: [1, 2, 3],
      liked: [false, false, false],
      more: {
        // name: "Kim Hyun",
        // userImage: "https://picsum.photos/100?random=3",
        // postImage: "https://picsum.photos/600?random=3",
        // likes: 36,
        // date: "May 15",
        // liked: false,
        // content: "오늘 무엇을 했냐면요 아무것도 안했어요 ?",
        // filter: "perpetua"
      },
    }
  },
  mutations: {
    changeName(state) {
      state.name = 'kh';
    },
    addAge(state) {
      state.age++;
    },
    resetAge(state) {
      state.age = 1;
    },
    changeLikes(state, data) {

      if (state.liked[data]) {
        state.likes[data]--;
        state.liked[data] = !state.liked[data];
      } else {
        state.likes[data]++;
        state.liked[data] = !state.liked[data];
      }
    },
    setMore(state, data) {
      state.more = data;
    }
  },
  actions: {
    getData(context) {
      axios
        .get(`https://codingapple1.github.io/vue/more0.json`)
        .then((data) => {
          context.commit('setMore', data.data);
        });
    }
  },

})

export default store;