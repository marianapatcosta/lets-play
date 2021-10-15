import { defineComponent } from "vue";
import { User } from "@/assets/icons";

const FAKE_USER = {
  name: "John Smith",
  age: 30,
  location: "Porto",
  occupation: "UI/UX Designer",
  avatar: User,
  about:
    "My Name is John Smith lorem empus id fringilla molestie ornare diam in olestie ipsum etium rosn ollicitudin est, porttitor amet hitmassa Done cporttitor dolor shit dolor kiren lorem nisl molestie pretium etfring.",
};

export default defineComponent({
  name: "UserProfile",
  data() {
    return {
      user: FAKE_USER,
    };
  },
});
