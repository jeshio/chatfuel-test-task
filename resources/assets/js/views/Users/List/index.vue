<template lang="pug">
  include ../../../tools/mixins.pug
  +b.Users-list
    +e.top-controls
      +e.btn.A(href="#", v-on:click.prevent="getItems()", :disabled="loading") {{ $t('navigation.refresh') }}
      +e.right
        +e.A.btn.-page.-md(href="#", @click.prevent="prevPage()", v-if="previousPageUrl") {{ $t('navigation.back') }}
        +e.A.btn.-page.-md(href="#", @click.prevent="nextPage()", v-if="nextPageUrl") {{ $t('navigation.forward') }}
        +e.A.btn.-page.-sm(href="#", @click.prevent="prevPage()", v-if="previousPageUrl")
          icon(name="arrow-left")
        +e.A.btn.-page.-sm(href="#", @click.prevent="nextPage()", v-if="nextPageUrl")
          icon(name="arrow-right")
    +b.loader(v-if="loading")
      pulse-loader(:loading="loading")
    +e.items(v-if="!loading")
      +e.row(v-for="user in items")
        +e.avatar
          router-link(:to="`/${user.id}`", :title="user.name")
            div(:style="{ backgroundImage: 'url(\\'' + user.avatarUrl + '\\')' }", :title="user.name")
        +e.name
          router-link(:to="`/${user.id}`") {{ user.name }}
        +e.ROUTER-LINK(:to="`/${user.id}`").right-array >
    +e.controls
      +e.A.btn.-page(href="#", @click.prevent="prevPage()", v-if="previousPageUrl") {{ $t('navigation.back') }}
      +e.A.btn.-page(href="#", @click.prevent="nextPage()", v-if="nextPageUrl") {{ $t('navigation.forward') }}
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>