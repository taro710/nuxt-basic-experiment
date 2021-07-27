<template lang="pug">
  div
    h1 computed → 変わらずcomputedを使用
    h2 -----------------------------------------------------
    ul
      li(v-for="user in data.users" :key="user.id") {{ user.id }} / {{ user.name }}
    p {{ message }}
    p ユーザー件数: {{ userNum }}
    h2 -----------------------------------------------------
    p computedを使うことで、データの値に変更があった場合にリアルタイムで算出プロパティ（ユーザー件数 userNum）も変わる
</template>

<script lang="js">
import { defineComponent, reactive, computed,ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    })
    const message = ref('※2秒後にユーザーが一人増えます');

    const userNum = computed(() => data.users.length)

    setTimeout(() => {
      data.users.push({ id: 4, name: 'SIRO' });
      message.value = '※増えました';
    }, 2000);

    return {
      data,
      message,
      userNum,
    }
  },
})
</script>
