<template lang="pug">
  include ../../tools/mixins.pug
  +b.App
    +e.col.-full.-blue-bg
      +e.layout
        +e.row
          +e.col.-title
            +e.H1 Title
    +e.layout
      +e.row
        +e.col
          +e.H1.title {{ message }}
          +e.P.text
            | Pug works!
          +e.P.text
            | {{ $t('auth.failed') }} — lang works!
          +e.content
            router-view
</template>
<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>