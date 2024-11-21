import { createRouter, createWebHistory } from "vue-router";
import ClothesView from "@/views/ClothesView.vue";
import ClothesItemView from "@/views/ClothesItemView.vue";
import NotFound from "@/views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "clothes",
      component: ClothesView,
    },
    {
      path: "/clothes/:id",
      name: "clothes-item",
      component: ClothesItemView,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
