<template>
  <div id="app">
    <div class="container">
      <h1 class="title">{{ getAppTitle }}</h1>
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      appTitle: ''
    }
  },
  computed: {
    // Отображение заголовка в зависимости от страницы
    getAppTitle() {
      return this.$route.meta.query === 'note' ? this.appTitle = 'Редактировать заметку' : 'Список заметок'
    },
  }
}
</script>
