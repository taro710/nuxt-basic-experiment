<template>
  <div>
    <h1>methods → 普通の関数定義でOK</h1>
    <h2>-----------------------------------------------------</h2>
    <form @submit.prevent>
      <div>
        <label for="name">お名前</label>
        <input id="name" type="text" v-model="data.form.name" />
      </div>
      <div>
        <button @click="addUser">ユーザー追加</button>
      </div>
    </form>
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
import { defineComponent, reactive, computed, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const data = reactive({
      form: {
        name: '',
      },
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
      ],
    })
    const userNum = computed(() => data.users.length)
    const addUser = () => {
      const id = Math.max(...data.users.map(u=>u.id)) + 1
      data.users.push({id: id, name: data.form.name})
      data.form.name = ''
    }

    return {
      data,
      addUser,
      userNum,
    }
  },
})
</script>
