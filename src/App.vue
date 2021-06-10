<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2 :class="['primary', { bold: mainCounter > 5 }]">
      mainCounter: {{ mainCounter }}
    </h2>
    <HelloWorld msg="Vue.js + TypeScript" @addToCount="addToCount" />
    <Status />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";
import Status from "./components/Status.vue";

@Options({
  components: {
    HelloWorld,
    Status,
  },
})
export default class App extends Vue {
  public mainCounter = 0;

  addToCount(n: number) {
    console.log("Increasing parent mainCounter:", n);
    this.mainCounter += n;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.primary {
  color: blue;
}
.bold {
  color: orange;
}
</style>
