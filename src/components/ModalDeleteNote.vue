<template>
  <div class="delete" v-if="deleteModalCheck">
    <div class="delete__item">
      <div class="delete__title">
        <span>Вы действительно хотите удалить заметку</span>
        <i class="material-icons" @click="emitIndex">close</i>
      </div>
      <div class="delete__btns">
        <button @click="clearTodoItem">Удалить</button>
        <button @click="emitIndex">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['deleteModalCheck', 'index'],
  methods: {
    emitIndex() {
      this.$emit('canceldelete', this.index)
    },
    clearTodoItem(index) {
      this.$store.commit('removeItemInList', index);      
      this.$emit('canceldelete', index)
      if(this.$route.path !== '/') {
         this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="sass" scoped>
@import ../sass/modaldelete
</style>
