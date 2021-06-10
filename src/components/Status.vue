<template>
  <div class="status">
    <div>
      Change global status here:
      <h3 class="">{{ status }}</h3>
    </div>
    <div>
      <button @click="changeStatus()">changeStatus</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Inject } from "vue-property-decorator";

import StatusService, { TStatus } from "../services/StatusService";

export default class Status extends Vue {
  statusService = new StatusService();

  public status!: TStatus;

  mounted() {
    this.statusService.status$.subscribe((data) => (this.status = data));
  }

  changeStatus() {
    console.log("should change status");
    console.log(">>>>>>>>>>>>>", this.statusService);
    //TODO
    // this.statusService.
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.status {
  height: 150px;
  width: 100px;
  display: flex;
  flex-direction: column;
  background-color: #00c9ffcc;
  border: 1px solid orange;
  border-radius: 5px;
}
</style>
