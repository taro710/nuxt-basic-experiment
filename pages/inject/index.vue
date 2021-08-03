<template>
  <div>
    <Provide>
      <Counter />
      <AddButton />
      <SubButton />
    </Provide>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import Counter from '~/components/inject/Counter.vue';
import AddButton from '~/components/inject/AddButton.vue';
import SubButton from '~/components/inject/SubButton.vue';
import Provide from '~/components/inject/Provide.vue';

export default defineComponent({
  components: {
    Counter,
    AddButton,
    SubButton,
    Provide,
  },
});
</script>
