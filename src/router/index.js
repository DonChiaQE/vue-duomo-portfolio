import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Colorizer from '../views/Colorizer.vue'
import UnrealEngine from '../views/UnrealEngine.vue'
import Competition from '../views/Competition.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/photos',
        name: 'Photos',
        component: Photos
    },
    {
        path: '/colorizer',
        name: 'Colorizer',
        component: Colorizer
    },
    {
        path: '/unrealengine',
        name: 'UnrealEngine',
        component: UnrealEngine
    },
    {
        path: '/competition',
        name: 'Competition',
        component: Competition
    },
]

const router = new VueRouter({
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
    mode: 'history',
    hash: false
})

export default router