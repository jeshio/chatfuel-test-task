<template lang="pug">
  include ../../../tools/mixins.pug
  +b.Users-list
    +e.H2.title Список пользователей
    +e.TABLE.table
      +e.TR(v-for="user in items").row
        +e.TD.avatar
          router-link(:to="`/${user.id}`")
            img(:src="user.avatarUrl", width="60", height="50", :title="user.name")
        +e.TD.name
          router-link(:to="`/${user.id}`") {{ user.name }}
    +e.controls
      +e.BUTTON.btn(v-on:click="prevPage()", v-if="previousPageUrl") Назад
      +e.BUTTON.btn(v-on:click="nextPage()", v-if="nextPageUrl") Вперёд
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>