import { defineComponent } from "vue";

export default defineComponent({
  name: "Player",
  props: {
    playerInfo: {
      type: Object,
      required: true,
    },
    isCurrentPlayer: {
      type: Boolean,
      required: false,
      default: false,
    },
    isWinner: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSmall: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    getSmallName(name) {
      return ` ${name[0]}${name[name.length - 1]}`;
    },
  },
});
