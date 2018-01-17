<template lang="pug">
  include ../../tools/mixins.pug
  +b.App
    +e.content
      +e.bg-fill
      +e.col.-full.-blue-bg
        +e.layout
          +e.row
            +e.col.-title
              +e.H1.title {{ title }}
              +e.H2.sub-title {{ $t('titles.administrating') }}
      +e.layout
        +e.row
          +e.col
            +e.content
              router-view
    +b.footer
      +e.content
        +e.col
          | Тестовое задание by
          a(href="mailto:jeshio@yandex.ru")  jeshio@yandex.ru

</template>
<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>