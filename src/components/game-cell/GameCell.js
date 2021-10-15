import { defineComponent } from "vue";

export default defineComponent({
  name: "GameCell",
  emits: ["play"],
  props: {
    move: {
      type: Object,
      required: false,
    },
    isCircle: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isDisabled() {
      return Object.keys(this.move).length;
    },
  },
});
