import { defineComponent } from "vue";
import { Send } from "@/assets/icons";

export default defineComponent({
  name: "SubscriptionBox",
  emits: ["submit"],
  data() {
    return {
      userEmail: "",
      Send,
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", this.userEmail);
      this.userEmail = "";
    },
  },
});
