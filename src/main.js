import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

window.onbeforeunload = function () {
  return "If you reload the page, your todos won't be saved!  ";
};
