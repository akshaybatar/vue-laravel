<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <router-link class="nav-link active" aria-current="page" to="/">home</router-link>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to=" { name: 'register' } "
                            v-if="$store.getters.getToken == 0 ">Register</router-link><br>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/login"  v-if="$store.getters.getToken == 0 ">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to=" { name: 'dashboard' } "  v-if="$store.getters.getToken != 0 ">Dashboard</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <router-view></router-view>
</template>

<script>
export default {
    mounted() {
        console.log('Component mounted.')
    }
}
</script>
