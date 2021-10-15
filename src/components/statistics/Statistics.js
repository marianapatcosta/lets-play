import { defineComponent } from "vue";
import GameHistory from "../game-history/GameHistory.vue";
import GameVictories from "../game-victories/GameVictories.vue";
import Timer from "../timer/Timer.vue";
import { PLAYERS, GAME_STATUS, TOTAL_ROUNDS } from "@/utils/game-metadata";
import { getVictoriesAndLossesPerPlayer } from "../../utils/game-utils";

export default defineComponent({
  name: "Statistics",
  components: {
    GameHistory,
    GameVictories,
    Timer,
  },
  props: {
    roundsHistory: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      TOTAL_ROUNDS,
    };
  },
  computed: {
    playedRounds() {
      return this.roundsHistory.length;
    },
    totalTime() {
      if (!this.roundsHistory.length) {
        return 0;
      }
      const time = this.roundsHistory.reduce(
        (total, currentRound) => total + currentRound.roundTime,
        0
      );
      return time;
    },
    stats() {
      const victoriesAndLossesPerPlayer = !this.roundsHistory.length
        ? {}
        : getVictoriesAndLossesPerPlayer(this.roundsHistory);

      const stats = Object.values(PLAYERS).map((player) => ({
        id: player.id,
        name: player.name,
        color: player.playerColor,
        victories: this.getRoundsPercentage(
          victoriesAndLossesPerPlayer[player.id]?.victories
        ),
        losses: this.getRoundsPercentage(
          victoriesAndLossesPerPlayer[player.id]?.losses
        ),
      }));

      this.getGameStatus(stats);

      return stats;
    },
  },
  methods: {
    getRoundsPercentage(value) {
      return value ? Math.round((value / this.playedRounds) * 100) : 0;
    },
    getGameStatus(stats) {
      if (stats[0].victories > stats[1].victories) {
        stats[0].status = GAME_STATUS.WINNER;
        stats[1].status = GAME_STATUS.LOSER;
      } else if (stats[0].victories < stats[1].victories) {
        stats[0].status = GAME_STATUS.LOSER;
        stats[1].status = GAME_STATUS.WINNER;
      } else {
        stats[0].status = GAME_STATUS.DRAW;
        stats[1].status = GAME_STATUS.DRAW;
      }
    },
  },
});
