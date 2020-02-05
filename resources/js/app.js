require("./bootstrap");

window.Vue = require("vue");
import router from "./router";

Vue.component("side-bar", require("./layouts/Sidebar.vue").default);

const app = new Vue({
    el: "#app",
    router
});
