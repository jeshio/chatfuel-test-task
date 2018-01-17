<template lang="pug">
  include ../../tools/mixins.pug
  +b.App
    +e.col.-full.-blue-bg
      +e.layout
        +e.row
          +e.col.-title
            +e.H1 {{ title }}
    +e.layout
      +e.row
        +e.col
          +e.content
            router-view
</template>
<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>