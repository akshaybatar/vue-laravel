<template >
    <div>
        <h1>All Style property</h1>
        <h2 style=" color: blue; backgroundColor:red;">four september1</h2>
        <h2 v-bind:style="{ color: 'black', backgroundColor: 'green' }">four september2</h2>
        <h2 :style="{ color: 'white', 'background-Color': 'black' }">four september3</h2>
        <h2 :style="{ color: cl, 'background-Color': bg }">four september4</h2>
        <h2 :style="obj">four september5</h2>
        <h2 :[attribute]="obj">four september6</h2>
        <h2 :[attribute]="[obj,obj1]">four september7</h2>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';

const cl = ref('red');
const bg = ref('blue');
const attribute = 'style';
const obj = reactive({
    color: 'white',
    backgroundColor: 'green',

})
const obj1 = reactive({

    fontSize:"50px"
})

</script>
