<template>
  <div class="modal-add" v-if="addCheck">
    <form @submit.prevent="addInputHandler">
      <span class="modal-add__title">
        Добавить заметку <i class="material-icons modal__close" @click="$emit('addcheck', addCheck)">close</i>
      </span>
      <input type="text" v-model="noteTitle" name="name" placeholder="Название заметки">
      <div class="modal-add__note">
        <input v-model="noteInput" type="text" name="note" placeholder="Название дела">
        <i title="Добавить дело" class="material-icons" @click="addNoteInput">add</i>
      </div>
      <ul>
        <li 
          v-for="(input, i) of arrInputs"
          :key="input + i"
        >
          {{ input.itemTitle }}<i class="material-icons" @click="clearNoteInput(i)">clear</i>
        </li>
      </ul>
      <input type="submit" value="Добавить">
    </form>
  </div>
</template>
<script>
export default {
  props: ['addCheck'],
  data() {
    return {
      noteInput: '',
      arrInputs: [],
      noteTitle: ''
    }
  },
  methods: {
    addInputHandler() {
      if(!this.noteTitle.trim()) return;
      
      let dataNote = {
        id: Date.now(),
        title: this.noteTitle,
        items: this.arrInputs
      };

      this.$store.commit('addItemInList', dataNote);
      this.$emit('addcheck', this.addCheck);
      this.noteInput = this.noteTitle = '';
      this.arrInputs = [];
    }
  }
}
</script>
<style lang="sass" scoped>
@import ../sass/_addnote
</style>