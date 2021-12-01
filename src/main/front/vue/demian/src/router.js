import Home from "./components/Home.vue";
import Think from "./components/Think.vue";
import Want from "./components/Want.vue";
import Wish from "./components/Wish.vue";
import LoadMap from "./components/LoadMap.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/think",
        component: Think,
    },
    {
        path: "/want",
        component: Want,
    },
    {
        path: "/wish",
        component: Wish,
    },
    {
        path: "/loadmap",
        component: LoadMap
    },
    {
        path: "/:anything(.*)",
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;