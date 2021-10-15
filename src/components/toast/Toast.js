import { defineComponent } from "vue";
import { Alert, Close, Info, Success, Warning } from "@/assets/icons";
import { TOAST_TYPES, DEFAULT_AUTODISMISS_TIME } from "@/utils/constants";

const toastAssets = {
  alert: { icon: Alert, class: "toast--alert" },
  info: { icon: Info, class: "toast--info" },
  success: { icon: Success, class: "toast--success" },
  warning: { icon: Warning, class: "toast--warning" },
};

export default defineComponent({
  name: "Toast",
  emits: ["dismiss"],
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: TOAST_TYPES.INFO,
    },
    autoDismissable: {
      type: Boolean,
      required: false,
      default: true,
    },
    timeToAutoDismiss: {
      type: Number,
      required: false,
      default: DEFAULT_AUTODISMISS_TIME,
      note: "Time in milliseconds for toast autodismiss.",
    },
  },
  data() {
    return {
      isOnTop: true,
      Close,
      autoDismissTimer: null,
    };
  },
  computed: {
    toastIcon() {
      return toastAssets[this.type].icon || "";
    },
    toastTypeClass() {
      return toastAssets[this.type].class || "";
    },
  },
  methods: {
    handleToastDismiss() {
      this.$emit("dismiss");
    },
    handleTimerSetup() {
      this.autoDismissTimer = setTimeout(
        this.handleToastDismiss,
        this.timeToAutoDismiss
      );
    },
  },
  mounted() {
    this.autoDismissable && this.handleTimerSetup();
  },
  beforeUnmount() {
    clearTimeout(this.autoDismissTimer);
  },
});
