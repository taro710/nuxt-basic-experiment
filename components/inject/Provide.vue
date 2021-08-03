<template>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { defineComponent, provide } from '@vue/composition-api';
import { useCounter, CounterKey } from '~/composable/useCounter';

export default defineComponent({
  setup() {
    provide(CounterKey, useCounter());

    return {};
  },
});
</script>
