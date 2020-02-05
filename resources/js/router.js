import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import Profile from "./components/Profile.vue";

const routes = [
    { path: "/dashboard", component: Dashboard },
    { path: "/profile", component: Profile }
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
