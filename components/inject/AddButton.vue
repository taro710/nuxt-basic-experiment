<template>
  <div>
    <button @click="increment">+</button>
  </div>
</template>
<script lang="ts">
import { inject } from '@nuxtjs/composition-api';
import { defineComponent } from '@vue/composition-api';
import { CounterKey, CounterStore, useCounter } from '~/composable/useCounter';

export default defineComponent({
  setup() {
    const { increment } = inject(CounterKey) as CounterStore;

    return {
      increment,
    };
  },
});
</script>
