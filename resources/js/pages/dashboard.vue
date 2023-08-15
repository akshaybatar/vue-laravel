<template>
    <div class="container">
        <div>
            <h2 >Dashboard : {{ $store.state.token }}</h2>
            <!-- <h3>{{ $store.getters.getToken }}</h3> -->
        </div>
        <button type="button" class="btn btn-secondary mt-2" @click="logout">Logout</button>

    </div>
</template>
<script>
import { useRouter } from 'vue-router';
import {useStore} from 'vuex';

export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        function logout() {
            store.dispatch('removeToken');
            router.push({ name: 'login' })
        }
        return {

            logout
        }
    }
}
</script>
