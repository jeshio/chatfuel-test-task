<template lang="pug">
  include ../../tools/mixins.pug
  +b.Users
    +e.H1.title Администрирование пользователей
    router-view
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>