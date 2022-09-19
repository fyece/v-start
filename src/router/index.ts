import GamesPage from "@/pages/GamesPage.vue";
import GamePage from "@/pages/GamePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/games", component: GamesPage },
    { path: "/games/:slug", component: GamePage },
],
});

export default router;
