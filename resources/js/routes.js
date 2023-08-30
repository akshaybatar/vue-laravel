import { createWebHistory, createRouter } from 'vue-router';
import mpp from './components/mpp.vue';
import login from './pages/login.vue';
import register from './pages/register.vue';
import dashboard from './pages/dashboard.vue';
//import store from './store/index.js';
import dynamic from './pages/dynamic.vue';
import { userStore } from './store/userStore.js';
import HelloWorld from '@/pages/HelloWorld.vue';
import NewComponent from './components/NewComponent.vue';
import AugComponent from '@/components/AugComponent.vue'
import Aug from '@/components/27Aug.vue';
import thirty from './components/30Aug.vue';
import ComputedProperty from '@/components/ComputedProperty.vue';


const routes = [
    {
        name: 'computed-property',
        path: '/computed-property',
        component: ComputedProperty,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'thirty',
        path: '/aug-thirty',
        component: thirty,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'Aug',
        path: '/aug-second',
        component: Aug,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'AugComponent',
        path: '/aug-component',
        component: AugComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'NewComponent',
        path: '/new-component',
        component: NewComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'mpp',
        path: '/',
        component: mpp,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'login',
        path: '/login',
        component: login,
        meta: {
            requiresAuth: false
        }
    },
    {
        name: 'register',
        path: '/register',
        component: register,
        meta: {
            requiresAuth: false
        }

    },
    {
        name: 'dashboard',
        path: '/dashboard',
        component: dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'dynamic',
        path: '/dynamic-form',
        component: dynamic,
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'HelloWorld',
        path: '/hello-world',
        component: HelloWorld,
        meta: {
            requiresAuth: true
        }
    },

];



const router = createRouter({
    history: createWebHistory(),
    routes
});

// router.beforeEach((to, from) => {
//     if (to.meta.requiresAuth && store.getters.getToken == 0) {
//         return { name: 'login' }
//     }
//     if (to.meta.requiresAuth == false && store.getters.getToken != 0) {
//         return { name: 'dashboard' }
//     }
//use for vuex
// });

router.beforeEach((to, from) => {
    const store = userStore();
   // console.log(store.token);
    if (to.meta.requiresAuth && store.token == 0) {
        return { name: 'login' }
    }
    if (to.meta.requiresAuth == false && store.token != 0) {
        return { name: 'dashboard' }
    }

});

export default router;
