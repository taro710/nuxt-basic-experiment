<template>
  <div class="GlobalWrapper">
    <Nuxt />
    <br />
    <h3>
      1つのコンポーネント内での違い data, computed, methods, watch, created,
      mounted
    </h3>
    <ul>
      <nuxt-link to="/data">data → ref, reactive</nuxt-link
      ><br />
      <nuxt-link to="/computed">computed → computed</nuxt-link
      ><br />
      <nuxt-link to="/method">methods → 普通の関数</nuxt-link
      ><br />
      <nuxt-link to="/watch">watch → watch, watchEffect </nuxt-link
      ><br />
      <nuxt-link to="/created"
        >created → 普通の関数呼び出しとして書く（DOM参照できない）</nuxt-link
      ><br />
      <nuxt-link to="/mounted">mounted → onMounted（DOM参照可能）</nuxt-link
      ><br />
    </ul>
    <h3>親子のコンポーネント間の違い - v-model, prop, emit, sync</h3>
    <ul>
      <nuxt-link to="/props">props → props</nuxt-link
      ><br />
      <nuxt-link to="/computed">computed → computed</nuxt-link
      ><br />
      <nuxt-link to="/vmodel"
        >v-model → v-model, this.$emit → context.emit</nuxt-link
      ><br />
      <nuxt-link to="/sync">.sync → .sync</nuxt-link
      ><br />
    </ul>
  </div>
</template>

<style>
html {
  font-family: sans-serif;
  font-size: 16px;
  word-spacing: 0.02em;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  letter-spacing: 0.02em;
  color: #333333;
}
.GlobalWrapper {
  max-width: 800px;
  margin: 32px auto;
  padding: 0 16px;
}
a {
  color: #4ba22c;
}
code {
  font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  background-color: #eee;
  padding: 4px 8px;
  border-radius: 4px;
  color: #e88060;
  font-weight: bold;
  font-size: 0.9em;
}
</style>
