<template>
  <div>
    <h1>created → 普通の関数呼び出しとして書く（DOM参照不可能）</h1>
    <h2>-----------------------------------------------------</h2>
    <div style="margin-top: 16px">
      <p>ユーザー件数: {{ userNum }}</p>
      <ul>
        <li v-for="u in data.users" :key="u.id">{{ u.id }} {{ u.name }}</li>
      </ul>
    </div>
    <h2>-----------------------------------------------------</h2>
  </div>
</template>

<script lang="js">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = reactive({
      users: [],
    })

    const userNum = computed(() => data.users.length)

    // created ... DOMにさわれることが保証されてない。APIからデータ取得する処理などを書く
    setTimeout(() => {
      data.users.push(...[
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ])
    }, 3000);

    return {
      data,
      userNum,
    }
  },
})
</script>
