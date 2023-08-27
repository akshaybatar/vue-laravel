<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <p class="text-danger"></p>
                <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error }}
                </div>
                <div class="alert alert-success" role="alert" v-if="msg">
                    {{ msg }}
                </div>

                <form @submit.prevent="login">
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary mt-4">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
//import {useStore} from 'vuex';

import { userStore } from '@/store/userstore.js'


export default {
    setup() {
        let form = reactive({
            email: '',
            password: '',
        });
        let error = ref('');
        let msg = ref('');
        const router = useRouter();
        const store = userStore();
        const login = async () => {
            try {
                const res = await axios.post('/api/login', form);
                if (res.data.status = "success") {
                    const token = res.data.data.token;
                    msg.value = res.data.message;
                    store.setToken(token);
                    router.push({ name: 'dashboard' });
                    // setTimeout(() => {
                    // }, 1000);
                } else {
                    error.value = res.data.message;
                }
            } catch (err) {
                if (err.response && err.response.status == 400) {
                    error.value = err.response.data.message;
                } else {
                    error.value = 'An error occured';
                }
            }

        }
        return {
            form,
            login,
            error,
            msg,
        }
    }

}
</script>
