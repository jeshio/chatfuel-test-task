<template lang="pug">
  include ../../../tools/mixins.pug
  +b.Users-list
    +e.items
      +e.row(v-for="user in items")
        +e.avatar
          router-link(:to="`/${user.id}`", :title="user.name")
            img(:src="user.avatarUrl", width="60", height="50", :title="user.name")
        +e.name
          router-link(:to="`/${user.id}`") {{ user.name }}
        +e.ROUTER-LINK(:to="`/${user.id}`").right-array >
    +e.controls
      +e.A.btn-prev(href="#", v-on:click.prevent="prevPage()", v-if="previousPageUrl") Назад
      +e.A.btn-next(href="#", v-on:click.prevent="nextPage()", v-if="nextPageUrl") Вперёд
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>