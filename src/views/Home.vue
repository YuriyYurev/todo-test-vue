<template>
  <div class="wrap">
    <div 
      class="wrap__item" 
      v-for="(listItem, i) of getList" 
      :key="listItem.id"
    >
      <span class="todo__title">{{ listItem.title }}</span>
      <div class="todo__icons">
        <router-link 
          :to="'/' + listItem.id" 
          tag="i" 
          :title="`Редактировать ${listItem.title}`" 
          class="material-icons"
        >
          border_color
        </router-link>
        <i class="material-icons" title="Удалить заметку" @click="clearTodoItem(i)">clear</i>
      </div>
      <ul class="todo__list">
        <li 
          :class="{'completed': item.completed}" 
          v-for="(item, i) of listItem.items" 
          :key="item.itemTitle + i"
        >
         {{ item.itemTitle }}
        </li>
      </ul>
    </div>
    <div class="wrap__item add" title="Добавить заметку" @click="addCheck = true">
      <i class="material-icons add__icon">add</i>
    </div>
    <AddNote 
      :addCheck="addCheck" 
      @addcheck="addCheck = false"
    />
    <ModalDeleteNote 
      :index="indexDelete" 
      :deleteModalCheck="daleteCheck" 
      @canceldelete="daleteCheck = false"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AddNote from '@/components/AddNote.vue'
import ModalDeleteNote from '@/components/ModalDeleteNote.vue'
export default {
  name: 'Home',
  components: {
    AddNote, ModalDeleteNote
  },
  data() {
    return {
      indexDelete: null,
      daleteCheck: false,
      addCheck: false,
    }
  },
  computed: {
    ...mapGetters(['getList'])
  },
  methods: {
    clearTodoItem(index) {
      this.indexDelete = index;
      this.daleteCheck = true;
    }
  }
}
</script>