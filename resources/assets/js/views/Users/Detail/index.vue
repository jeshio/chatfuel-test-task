<template lang="pug">
  include ../../../tools/mixins.pug
  +b.Users-detail
    router-link(:to="`/`") Назад к списку
    +e.info(v-if="item")
      +e.avatar
        img(:src="item.avatarUrl", :title="item.name")
      +e.name(v-if="!editForm.name")
        | {{ item.name }}
        button(@click="edit()") Изменить
      +e.name.-edited(v-if="editForm.name")
        input(type="text", v-model="form.name", :class="{ 'is-invalid': form.errors.has('name') }")
        button(@click="save()") Сохранить
        button(@click="cancel()") Отменить
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>