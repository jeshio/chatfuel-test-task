<template lang="pug">
  include ../../tools/mixins.pug
  +b.App
    +e.H1.title {{ message }}
    +e.P.text Pug works!
    +e.P.text {{ $t('auth.failed') }} — lang works!
</template>
<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>