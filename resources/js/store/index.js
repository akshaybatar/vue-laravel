import { createStore } from 'vuex';
const store = createStore({

    state: {
        //define variables
        token: localStorage.getItem('token') || 0
    },
    mutations: {
        //update varible value
        UPDATE_TOKEN(state, payLoad) {
            state.token = payLoad

        }

    },
    actions: {
        //action to be performed

        setToken(context, payLoad) {
            localStorage.setItem('token', payLoad);
            context.commit('UPDATE_TOKEN', payLoad)
        },
        removeToken(context){
            localStorage.removeItem('token');
            context.commit('UPDATE_TOKEN', 0);
        }
    },
    getters: {
        //get state variable value
        getToken: function (state) {
            return state.token;
        }

    },

});

export default store;
