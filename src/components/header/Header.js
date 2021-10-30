import { defineComponent } from "vue";

const SCROLL_TOP_OFFSET = 150;

export default defineComponent({
  name: "Header",
  data() {
    return {
      isOnTop: true,
    };
  },
  methods: {
    handleScroll() {
      this.isOnTop = window.pageYOffset < SCROLL_TOP_OFFSET;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
});
