<template lang="pug">
  div
    h1 watch → watch, watchEffectを使用
    p お名前の値はdataと連動している。値を変えた際に何か実行したいとき、watchを使う。ここでは、コンソールに今の値と直前の値を出力させる。
    h2 -----------------------------------------------------
    form(@submit.prevent)
      div
        label(for="name") お名前
        input(id="name" v-model="form.name" type="text")
      div
        label(for="email") email
        input(id="email" v-model="form.email" type="text")
    h2 -----------------------------------------------------
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const form = reactive({
      name: 'あsdファsdf',
      email: 'しでだ',
    });

    watch(
      () => form.name,
      (currentName, prevName) => {
        console.info('currentName: ', currentName, 'prevName: ', prevName);
      }
      //{ deep: true}, //オブジェクトの各プロパティを監視したい場合
    );

    return {
      form,
    };
  },
});
</script>
