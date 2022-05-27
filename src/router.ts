import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: () => import('./components/PageHome.vue'),
    meta: {
      name: "Home"
    }
  },
  {
    path: "/about",
    component: () => import('./components/PageAbout.vue'),
    meta: {
      name: "About"
    }
  },
  {
    path: "/user",
    component: () => import('./components/PageUser.vue'),
    meta: {
      name: "User"
    }
  },
]

export default createRouter({
  history: createWebHistory(),
  routes
})