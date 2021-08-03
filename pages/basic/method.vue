<template lang="pug">
  div
    h1 methods → 普通の関数定義でOK
    p ボタンをクリックすると、ユーザーを追加するための関数が呼ばれる。
    h2 -----------------------------------------------------
    //- @submit.prevent を利用すると preventDefaultメソッド が実行されて、ブラウザ本来の挙動(formによる送信)が停止されます。
    form(@submit.prevent)
      div
        label(for="name") お名前
        input(id="name" type="text" v-model="data.form.name")
      div
        button(@click="addUser") ユーザー追加
    div(style="margin-top: 16px")
      p ユーザー件数: {{ userNum }}
      ul
        li(v-for="u in data.users" :key="u.id") {{ u.id }} {{ u.name }}
    h2 -----------------------------------------------------
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = reactive({
      form: {
        name: 'この値はdataと連動している',
      },
      users: [
        { id: 1, name: 'TARO' },
        { id: 2, name: 'JIRO' },
        { id: 3, name: 'SABURO' },
      ],
    });

    const userNum = computed(() => data.users.length);

    const addUser = () => {
      const id = Math.max(...data.users.map(u => u.id)) + 1;
      data.users.push({ id: id, name: data.form.name });
      data.form.name = 'この値はdataと連動している';
    };

    return {
      data,
      addUser,
      userNum,
    };
  },
});
</script>
