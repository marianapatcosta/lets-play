import { defineComponent } from "vue";
import GameCell from "../game-cell/GameCell.vue";

export default defineComponent({
  name: "TicTacToeBoard",
  components: {
    GameCell,
  },
  emits: ["play"],
  props: {
    moves: {
      type: Array(Object),
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    handleMove(cellIndex) {
      this.$emit("play", cellIndex);
    },
  },
});
