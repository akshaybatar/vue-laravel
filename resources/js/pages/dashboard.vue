<template>
    <div class="container">
        <div>
            <h2>Dashboard : {{ store.getToken }}</h2>

        </div>
        <button type="button" class="btn btn-secondary mt-2" @click="logout">Logout</button>
        <HelloWorld msg="hello world i'm here" />

    </div>
</template> 
<script>
import { useRouter } from 'vue-router';
import { userStore } from '@/store/userStore.js';   // state variable manage here
import  HelloWorld  from '../pages/HelloWorld.vue'; // this is component

export default {

    components: {
        HelloWorld
    },
    setup() {
        const router = useRouter();
        // const store = useStore();
        const store = userStore();

        function logout() {
            store.removeToken();
            router.push({ name: 'login' })
        }
        return {

            logout,
            store
        }
    }
}
</script>
