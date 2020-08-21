<template>
  <div class="wrap">
    <div class="note">
      <form @submit.prevent="changeNote">
        <div class="note__title">
          <input type="text" name="title" v-model="noteTitle" placeholder="Загаловок заметки">
          <i class="material-icons">border_color</i>
        </div>
        <div class="note__todo-item">
          <input ref="input" v-model="noteInput" type="text" name="note" placeholder="Добавить новое дело"><i class="material-icons" @click="addNoteInput">add</i>
        </div>
        <ul>
          <li v-for="(input, i) of arrInputs" :key="input + i">
            <input 
              :class="{'completed': input.completed}" 
              :disabled="input.completed" 
              v-model="input.itemTitle" 
              type="text"
            >
            <i class="material-icons" @click="clearNoteInput(i)">clear</i>
            <button
              :class="{'completed-color': input.completed}" 
              @click.prevent="input.completed = !input.completed"
            >
              {{ input.completed ? 'Завершена' : 'Задача Активна' }}
            </button>
          </li>
        </ul>
        <div class="note__btns">
          <button @click.prevent="deleteNote">Удалить заметку</button>
          <button type="submit">Изменить</button>
        </div>
      </form>
      <button class="note__close" @click="cancel">Отменить редактирование</button>
    </div>
    <ModalDeleteNote 
      :index="indexDelete" 
      :deleteModalCheck="daleteCheck" 
      @canceldelete="daleteCheck = false"
    />
  </div>
</template>
<script>
import ModalDeleteNote from '@/components/ModalDeleteNote.vue'
export default {
  components: {
    ModalDeleteNote
  },
  data() {
    return {
      indexDelete: null,
      daleteCheck: false,
      noteTitle: '',
      arrInputs: [],
      noteInput: ''
    }
  },
  mounted() {
    if(!this.$store.getters.getNoteItemList(+this.$route.params.id)) {
      this.$router.push('/')
    }
    this.noteTitle = this.getNoteItem.title
    this.arrInputs = this.getNoteItem.items
  },
  computed: {
    getNoteItem() {
      return this.$store.getters.getNoteItemList(+this.$route.params.id)
    }
  },
  methods: {
    changeNote() {
      if(!this.noteTitle.trim()) return;
            
      let dataNote = {
        id: +this.getNoteItem.id,
        title: this.noteTitle,
        items: this.arrInputs
      };
      this.$store.commit('changeNoteToList', dataNote);
      this.$router.push('/');
    },
    cancel() {
      this.$router.push('/')
    },
    deleteNote(id) {
      let findIndex = this.$store.getters.getList.findIndex(note => note.id === +this.$route.params.id)
      this.indexDelete = findIndex;
      this.daleteCheck = true
    }
  }
}
</script>
<style lang="sass" scoped>
@import ../sass/note
</style>