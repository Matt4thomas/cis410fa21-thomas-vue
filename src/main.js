import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import myRouter from "./routes.js";

axios.defaults.baseURL =
  "https://docs.google.com/document/d/1AU329ZjthGx0DoKfadYyZW6vtAcucDRbIXAtYEn5ddI/edit?usp=sharing";

const myApp = createApp(App);
myApp.use(myRouter);
myApp.mount("#app");
