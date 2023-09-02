<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6 mt-4">
                <p class="text-danger"></p>
                <!-- <div class="alert alert-danger" role="alert" v-if="error">
                    {{ error }}
                </div> -->
                <div class="alert alert-danger" role="alert" v-for="err in error" :key="err">
                    <span v-for="er in err" :key="er">{{ er }}</span>
                </div>


                <div class="alert alert-success" role="alert" v-if="msg">
                    {{ msg }}
                </div>

                <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="name" class="form-label">Name</label>
                        <input type="name" class="form-control" id="name" v-model="form.name">
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="email" v-model="form.email">
                    </div>
                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="form.password">
                    </div>
                    <div class="form-group">
                        <label for="c_password" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="c_password" v-model="form.c_password">
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
import { useRouter } from 'vue-router';
import axios from 'axios';
//import { useStore } from 'vuex';
import { userStore } from '@/store/userstore.js'


export default {

    setup() {
        let error = ref('');
        let msg = ref('');
        const store = userStore();
        const router = useRouter();
        let form = reactive({
            name: '',
            email: '',
            password: '',
            c_password: '',
        });

        const register = async () => {

            try {
                const res = await axios.post('/api/register', form);
                if (res.data.status = "success") {
                    const token = res.data.data.token;
                    store.setToken(token)
                    error.value = '';
                    msg.value = res.data.message;
                    setTimeout(() => {
                        router.push({ name: 'dashboard' });
                    }, 1000);
                } else {
                    error.value = res.data.message;
                }

            } catch (err) {
                console.log(err.response.data.message);
                if (err.response && err.response.status == 400) {
                    error.value = err.response.data.message;
                } else {
                    error.value = 'An error occured';
                }

            }
        }
        return {
            error,
            msg,
            register,
            form

        }
    }


}



</script>
