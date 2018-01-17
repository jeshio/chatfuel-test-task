<template lang="pug">
  include ../../tools/mixins.pug
  +b.NotFound
    +e.p Страница не найдена
    router-link(to="/") На главную
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({
    // @ts-ignore
    head: { title: function () { return { inner: this.title } } },
  })
  export default class UsersList extends Vue {
    title = 'Ошибка 404';

    created() {
      this.$root.$emit('set-title', this.title);
    }
  }
</script>
<style src="./style.scss" lang="scss" scoped></style>