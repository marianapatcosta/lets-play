import { defineComponent } from "vue";
import { Email, Facebook, Instagram, LinkedIn, Twitter } from "@/assets/icons";
import SubscriptionBox from "../subscription-box/SubscriptionBox.vue";

const contacts = {
  address: "Rua Sá da Bandeira, 111, Porto",
  phone: "(+351) 223 248 286",
  social: [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/SWORDHealth1/",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/swordhealth",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      url: "https://twitter.com/swordhealth",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "",
    },
    {
      name: "email",
      icon: Email,
      url: "mailto:inbound@swordhealth.com",
    },
  ],
};

export default defineComponent({
  name: "Footer",
  components: {
    SubscriptionBox,
  },
  data() {
    return {
      contacts,
    };
  },
});
