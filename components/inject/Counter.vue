<template>
  <div>
    <div>{{ count }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject } from '@vue/composition-api';
import { CounterKey, CounterStore, useCounter } from '~/composable/useCounter';

export default defineComponent({
  setup() {
    const { count } = inject(CounterKey) as CounterStore;

    return {
      count,
    };
  },
});
</script>
