import { defineComponent } from "vue";
import { Pause, Play } from "@/assets/icons";
import { formatTime } from "@/utils/game-utils";

export default defineComponent({
  name: "Timer",
  emits: ["manage-timer"],
  props: {
    time: {
      type: Number,
      required: true,
    },
    isTimerOn: {
      type: Boolean,
      required: false,
      default: false,
    },
    isControlled: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      Pause,
      Play,
    };
  },
  computed: {
    formattedTime() {
      return formatTime(this.time);
    },
  },
  methods: {
    handleTimerManagement() {
      this.$emit("manage-timer");
    },
  },
});
