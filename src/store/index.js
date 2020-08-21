import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //Лист с данными
    list: JSON.parse(localStorage.getItem('list')) || localStorage.setItem('list', JSON.stringify([]))
  },
  getters: {
    getList(state) {
      if(!state.list) {
        state.list = JSON.parse(localStorage.getItem('list'))
      }
      state.list = JSON.parse(localStorage.getItem('list'))
      return state.list;
    },
    //Получение одной заметки по ID
    getNoteItemList: state => id => {
      state.list = JSON.parse(localStorage.getItem('list'));
      return state.list.find(todo => todo.id === id);
    },
  },
  mutations: {
    // добавление заметки
    addItemInList(state, data) {
      state.list.push(data);
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    //Удаление замети по ID
    removeItemInList(state, id) {
      state.list.splice(id, 1);
      localStorage.setItem('list', JSON.stringify(state.list));
    },
    //Редактирование Заметки
    changeNoteToList(state, note) {
      let stateIndexChange = state.list.findIndex(item => item.id === note.id);

      state.list.splice(stateIndexChange, 1, note);
      localStorage.setItem('list', JSON.stringify(state.list));
    }
  }

});
