import { defineComponent } from "vue";
import Player from "../player/Player.vue";
import { PLAYERS, TOTAL_ROUNDS } from "@/utils/game-metadata";
import { User } from "@/assets/icons";

export default defineComponent({
  name: "GameHistory",
  components: {
    Player,
  },
  props: {
    roundsHistory: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      PLAYERS,
      TOTAL_ROUNDS,
      User,
    };
  },
  computed: {
    playedRounds() {
      return this.roundsHistory.length;
    },
  },
});
