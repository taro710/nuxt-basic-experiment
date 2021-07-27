<template lang="pug">
  div
    h1 data → ref, reactiveを使用
    h2 -----------------------------------------------------
    h3 {{ title }}
    ul
      li(v-for="user in data.users" :key="user.id") {{ user.id }} / {{ user.name }}
    p {{ message }}
    h2 -----------------------------------------------------
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const message = ref('※2秒後にユーザーが一人増えます');
    const title = ref('TITLE');
    const data = reactive({
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    });

    setTimeout(() => {
      data.users.push({ id: 4, name: 'SIRO' });
      message.value = '※増えました';
    }, 2000);

    return {
      message,
      title,
      data,
    };
  },
});
</script>
