<template>
  <div>
    <h1>data → ref, reactiveを使用</h1>
    <h2>-----------------------------------------------------</h2>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="user in data.users" :key="user.id">
        {{ user.id }} / {{ user.name }}
      </li>
    </ul>
    <h2>-----------------------------------------------------</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const title = ref('TITLE');
    const data = reactive({
      users: [
        {
          id: 1,
          name: 'TARO',
        },
        {
          id: 2,
          name: 'JIRO',
        },
        {
          id: 3,
          name: 'SABURO',
        },
      ],
    });

    setTimeout(() => {
      data.users.push({ id: 4, name: 'SIRO' });
      title.value = 'Title';
    }, 2000);

    return {
      title,
      data,
    };
  },
});
</script>
