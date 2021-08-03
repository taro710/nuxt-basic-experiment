<template lang="pug">
  div
    h1 .sync → 変わらず.syncを使用
    p 親コンポーネントから子コンポーネントへ値を渡し、子コンポーネントから親コンポーネントへ変化した値を返すには、親コンポーネントでv-model="値"とする他に:prop名.sync="値"とも書ける。
    h2 -----------------------------------------------------
    form(@submit.prevent)
      InputName3(:value.sync="form.name")
      InputName4(:value.sync="form.name")
    h2 -----------------------------------------------------
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import InputName3 from '~/components/basic/InputName3.vue';
import InputName4 from '~/components/basic/InputName4.vue';

export default defineComponent({
  components: {
    InputName3,
    InputName4,
  },
  setup() {
    const form = reactive({
      name: 'TARO',
    });

    return {
      form,
    };
  },
});
</script>
