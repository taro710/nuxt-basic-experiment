<template>
  <div>
    <button @click="decrement">-</button>
  </div>
</template>
<script lang="ts">
import { inject } from '@nuxtjs/composition-api';
import { defineComponent } from '@vue/composition-api';
import { CounterKey, CounterStore, useCounter } from '~/composable/useCounter';

export default defineComponent({
  setup() {
    const { decrement } = inject(CounterKey) as CounterStore;

    return {
      decrement,
    };
  },
});
</script>
