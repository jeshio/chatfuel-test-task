<template lang="pug">
  include ../../../tools/mixins.pug
  +b.Users-detail
    +e.top-controls
      router-link(:to="`/`")
        icon(name="arrow-left")
        |  Вернуться к списку
    +b.loader(v-if="loading")
      pulse-loader(:loading="loading")
    +e.info(v-if="!loading && item")
      +e.avatar
        img(:src="item.avatarUrl", :title="item.name")
      +e.name(v-if="!editForm.name")
        h2 {{ item.name }}
        +e.A(@click.prevent="edit()", href="#", title="Изменить имя пользователя")
          | Изменить&nbsp;
          icon(name="pencil")
      +e.name.-edited(v-if="editForm.name")
        form(@submit.prevent="save", @keydown="form.onKeydown($event)")
          +e.input-wrapper
            input(type="text", v-model="form.name", :class="{ '-is-invalid': form.errors.has('name') }", placeholder="Имя пользователя")
          +e.btn.-cancel.A(@click.prevent="cancel()", href="#", title="Отменить изменения") Отменить
          +e.btn.-save.A(@click.prevent="save()", href="#", title="Сохранить изменения") Сохранить
          +e.error-messages.UL(v-if="form.errors.has('name')")
            LI(v-for="(error, index) in form.errors.getAll('name')", :key="index") {{ error }}
</template>

<script src="./script.ts" lang="ts"></script>
<style src="./style.scss" lang="scss" scoped></style>