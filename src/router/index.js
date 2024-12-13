import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";

const routes = [
  {
    path: "/",
    name: "/",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  }
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;