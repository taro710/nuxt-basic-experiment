<template lang="pug">
  div
    h1 watch → watch, watchEffectを使用
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

<script lang="js">
import { defineComponent, reactive, computed, ref, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const form = reactive({
      name: 'あsdファsdf',
      email: 'しでだ',
    })

    watch(
      () => form.name,
      (currentName, prevName) => {
        console.info('currentName: ', currentName, 'prevName: ', prevName)
      },
      //{ deep: true}, //オブジェクトの各プロパティを監視したい場合
    )

    return {
      form,
    }
  },
})
</script>
