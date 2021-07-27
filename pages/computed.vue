<template lang="pug">
  div
    h1 computed → 変わらずcomputedを使用
    h2 -----------------------------------------------------
    p ユーザー件数: {{ userNum }}
    h2 -----------------------------------------------------
</template>

<script lang="js">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    })
    const userNum = computed(() => data.users.length)
    return {
      data,
      userNum,
    }
  },
})
</script>
