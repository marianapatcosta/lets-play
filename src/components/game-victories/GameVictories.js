import { defineComponent } from "vue";

export default defineComponent({
  name: "GameVictories",
  props: {
    stats: {
      type: Object,
      required: true,
    },
  },
});
