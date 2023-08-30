<template>
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                    <router-link class="nav-link active" aria-current="page" to="/">home</router-link>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'register' }"
                            v-if="token == 0">Register</router-link><br>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/login" v-if="token == 0">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{ name: 'dashboard' }"
                            v-if="token != 0">Dashboard</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/dynamic-form" v-if="token != 0">Dynamic
                            form</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{name: 'HelloWorld'}" v-if="token != 0">Hello World</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/new-component" v-if="token != 0">New Component</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/aug-component" v-if="token != 0">27 Aug</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" to="/aug-second" v-if="token != 0">27 Aug 2nd</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{name:'thirty'}" v-if="token != 0">30 Aug 2nd</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link active" :to="{name:'computed-property'}" v-if="token != 0">Computed Property</router-link>
                    </li>
                </ul>
            </div>

        </div>
    </nav>

    <router-view></router-view>
</template>

<script>

import { userStore } from '@/store/userstore.js'
import { mapState } from 'pinia'
export default {
    computed: {
        ...mapState(userStore, ['token'])
    },
    mounted() {
        //console.log(this.token)
    }

}
</script>
