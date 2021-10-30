import { defineComponent } from "vue";
import { Pause, Play } from "@/assets/icons";
import { formatTime } from "@/utils/game-utils";

export default defineComponent({
  name: "Timer",
  emits: ["time"],
  props: {
    time: {
      type: Number,
      required: false,
    },
    isControlled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      isTimerOn: false,
      currentTime: 0, // in milliseconds
      Pause,
      Play,
    };
  },
  computed: {
    formattedTime() {
      return formatTime(this.isControlled ? this.currentTime : this.time);
    },
  },
  methods: {
    handleTimerManagement() {
      this.isTimerOn ? this.pauseTimer() : this.startTimer();
    },
    startTimer() {
      if (this.isTimerOn) return;
      this.isTimerOn = true;
      this.timer = setInterval(() => {
        this.currentTime += 1000;
      }, 1000);
    },
    pauseTimer() {
      this.isTimerOn = false;
      clearInterval(this.timer);
    },
    resetTimer() {
      this.isTimerOn = false;
      this.currentTime = 0;
      clearInterval(this.timer);
    },
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
});
