
import './bootstrap';
import { createApp } from 'vue';
import router from './routes.js';
import App from './layouts/App.vue';
//import store from './store/index.js';
import { createPinia } from 'pinia'

createApp(App).use(router).use(createPinia()).mount("#app")


//createApp(App).use(router).use(store).mount("#app")  use for vuex

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

//app.mount('#app');
