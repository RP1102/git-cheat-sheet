
import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import GitArticle from "@/components/GitArticle"
import VueArticle from "@/components/VueArticle"

const routes = [
    {path: '/git', name: 'GitArticle', component: GitArticle},
    {path: '/vue', name: 'VueArticle', component: VueArticle},
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
   });

// To enable bootstrap for the vue project
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


createApp(App).use(router).mount('#app')
