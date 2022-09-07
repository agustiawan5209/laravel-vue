/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import homeVue from './pages/home.vue';
import aboutVue from './pages/about.vue';
const routes = [{
        name: 'home',
        path: '/home',
        component: homeVue
    },
    {
        name: 'about',
        path: '/about',
        component: aboutVue
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;

const app = createApp({});

import ExampleComponent from './components/ExampleComponent.vue';
import contentcomponent from './layout/content.vue';
import navbarComponent from './sidebar/navbar.vue';
import sidebarComponent from './sidebar/sidebar.vue';

app.component('example-component', ExampleComponent);
app.component('content-component', contentcomponent);
app.component('navbar-component', navbarComponent);
app.component('sidebar-component', sidebarComponent);

app.use(router)

app.mount('#app');
