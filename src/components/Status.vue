<template>
  <div class="status">
    <div>
      Change global status here:
      <h3 class="status-value" @click="selectorToggler()">{{ status }}</h3>
    </div>
    <div>
      <Selector
        v-if="isSelectorVisible"
        :options="options"
        @option-clicked="(option) => changeStatus(option)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import StatusService, { TStatus } from "../services/StatusService";
import Selector from "./Selector.vue";

@Options({
  components: {
    Selector,
  },
})
export default class Status extends Vue {
  statusService = new StatusService();

  public status = "";
  public options = ["ready", "in progress", "done"];
  public isSelectorVisible = false;

  mounted() {
    this.statusService.status$.subscribe((data) => (this.status = data));
  }

  changeStatus(val: TStatus) {
    console.log("should change status", val);
    this.statusService.changeStatus(val);
    this.selectorToggler();
  }

  selectorToggler() {
    this.isSelectorVisible = !this.isSelectorVisible;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status {
  background-color: #00c9ffcc;
  border: 1px solid orange;
  border-radius: 5px;
}
.status-value {
  cursor: pointer;
}
</style>
