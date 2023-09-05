<template>
     <mpp />
    <div>
        <h1>30 aug</h1>
        <h2>{{ fullname(101) }}</h2>

    </div>
</template>
<script setup>
import { ref } from 'vue';
import mpp from './mpp.vue'


const fname = ref('Akshay');
const lname = ref('Kumar');

function fullname(roll) {

    return fname.value + " " + lname.value + " " + "roll no: " + roll

}

setTimeout(() => {
    //console.log(fullname());
    lname.value = 'chaudhary';
}, 2000);

// const fullname=(roll)=> {

// return fname.value + " " + lname.value+ " "+ "roll no: "+roll
// }

</script>









<!-- <template>
    <h1> 30 Aug</h1>
</template>

<script setup>
import { reactive, ref, isRef, isReactive, unref } from 'vue';

const obj = reactive({ count: 9 });
var a = ref(10);

console.log("a:", isRef(a));
console.log("obj check :", isReactive(obj));
console.log("unref a:", unref(a))
</script>

<style></style> -->
