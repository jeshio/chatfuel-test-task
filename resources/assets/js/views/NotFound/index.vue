<template lang="pug">
  include ../../tools/mixins.pug
  +b.NotFound
    +e.P.text {{ $t('navigation.not_found') }}
    router-link(to="/") {{ $t('navigation.to_index') }}
</template>

<script lang="ts">
  import Component from 'vue-class-component';
  import Vue from 'vue';

  @Component({
    // @ts-ignore
    head: { title: function () { return { inner: this.title } } },
  })
  export default class UsersList extends Vue {
    title = Vue.i18n.translate('titles.error', { code: 404 });

    created() {
      this.$root.$emit('set-title', this.title);
    }
  }
</script>
<style src="./style.scss" lang="scss" scoped></style>