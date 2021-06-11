<template>
  <div class="content">
    <div class="options flex flex--column">
      <div
        v-for="option in options"
        :key="option"
        class="options-item"
        @click="optionClicked(option)"
      >
        <div class="options-item-row">
          <div class="options-item-name">{{ option }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./Selector.vue.ts"></script>

<style scoped>
.content {
  background-color: black;
  color: white;

  border-radius: 3px;
  padding: 3px 0 3px 0;
}
.options-item :hover {
  background-color: green;
}
.options-item {
  cursor: pointer;
}
</style>
