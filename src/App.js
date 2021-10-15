import {
  Header,
  Footer,
  GamePlayground,
  Statistics,
  Toast,
  UserProfile,
} from "@/components";
import { TOAST_TYPES, TOAST_OFFSET } from "@/utils/constants";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    GamePlayground,
    Statistics,
    Toast,
    UserProfile,
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
    handleFakeSubmission() {
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        this.toastData.push({
          type: TOAST_TYPES.SUCCESS,
          message:
            "Thank you for subscribing. You will receive news from us soon!",
        });
      }, 1000);
    },
    handleRoundsHistoryUpdate(roundsHistory) {
      this.gameRoundsHistory = roundsHistory;
    },
  },
};
