<template>
  <div>
    <h1>computed → 変わらずcomputedを使用</h1>
    <h2>-----------------------------------------------------</h2>
    <p>ユーザー件数: {{ userNum }}</p>
    <h2>-----------------------------------------------------</h2>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
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
