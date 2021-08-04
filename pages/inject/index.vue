<template>
  <div>
    <Counter />
    <AddButton />
    <SubButton />
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Counter from '~/components/inject/Counter.vue';
import AddButton from '~/components/inject/AddButton.vue';
import SubButton from '~/components/inject/SubButton.vue';
import { provide } from '@nuxtjs/composition-api';
import { CounterKey, useCounter } from '~/composable/useCounter';

export default defineComponent({
  components: {
    Counter,
    AddButton,
    SubButton,
  },
  setup() {
    provide(CounterKey, useCounter());

    return {};
  },
});
</script>
