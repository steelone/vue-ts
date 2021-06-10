<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ firstName }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ counter }}</h2>
    <button @click="incrementCounter()">Increment</button>
    <button @click="addToCountHandler(5)">Increment by 5</button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class HelloWorld extends Vue {
  @Prop() public msg!: string;
  public firstName = "Vyacheslav";
  public lastName = "Denisenko";
  public counter = 0;

  mounted() {
    console.log("mounted!");
  }

  get fullName(): string {
    return `${this.firstName}  ${this.lastName}`;
  }

  incrementCounter() {
    this.counter++;
  }

  // @Emit()
  // addToCount(n: number) {
  //   this.counter += n;
  // }
  addToCountHandler(n: number) {
    this.$emit("addToCount", n);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
