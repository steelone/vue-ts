import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

export default class Selector extends Vue {
  @Prop() options!: string[];

  optionClicked(option: string) {
    this.$emit("option-clicked", option);
  }
}
