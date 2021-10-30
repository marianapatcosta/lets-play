import { Header, GamePlayground, Statistics, Toast } from "@/components";
import { TOAST_OFFSET } from "@/utils/constants";

export default {
  name: "App",
  components: {
    Header,
    GamePlayground,
    Statistics,
    Toast,
  },
  data() {
    return {
      TOAST_OFFSET,
      isSubmitting: false,
      toastData: [],
      gameRoundsHistory: [],
    };
  },
  methods: {
    handleToastDismiss(index) {
      this.toastData = this.toastData.filter(
        (data, toastIndex) => toastIndex !== index
      );
    },
    handleRoundsHistoryUpdate(roundsHistory) {
      this.gameRoundsHistory = roundsHistory;
    },
  },
};
