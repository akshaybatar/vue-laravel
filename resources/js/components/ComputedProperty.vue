<template>
    <div>

        <h1>Computed Property</h1>
        <h1>{{ fullname }}</h1>

    </div>
</template>



<script setup>
import { ref, computed } from 'vue';

let fname = ref("Akshay");
let lname = ref("Kumar");

const fullname = computed({
    //getters
    get() {
        console.log("getters called")
        return fname.value + " " + lname.value;
    },
    //setter
    set(newvalue) {
        console.log("setter called", newvalue)

        const abs = newvalue.split(" ");
        fname.value = abs[0];
        lname.value = abs[1];

    }

});
setTimeout(() => {
    console.log("timeout");
    // fname.value = "Akshit";
    // lname.value = "chaudhary";
    fullname.value = "Arjun Chutiya";
}, 2000);


// const fname = ref('Akshay');
// const lname = ref('Kumar');

// const fullname = computed(() => {

//     return fname.value + " " + lname.value
// });

// setTimeout(() => {
//     console.log("function calling")
//     lname.value ='chaudhary';

// }, 2000)

</script>
