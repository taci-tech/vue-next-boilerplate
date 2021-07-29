import { createApp } from 'vue'
import App from './App.vue'

import { useDefinedElements } from './plugins/defined-elements.js'

import './styles/main.scss'
import './styles/pages.scss'

import './styles/defined-elements.scss'
import './styles/defined-elements-layout.scss'

import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const app = createApp(App)
app.use(router)

useDefinedElements(app)

app.mount('#app')