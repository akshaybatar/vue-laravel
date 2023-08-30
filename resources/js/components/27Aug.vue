<template>
    <div>
        <h2>{{ count.count.count }}</h2>
        <h2>{{ count.user }}</h2>
        <h3>{{ a }}</h3>
        <h3>{{ b.count.value }}</h3>
    </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
const count = reactive({
    count: {count:0},
    user:[
        "name",'akshay',
        ]
});

const a = ref(5);

let b = {count:ref(9)};

console.log("a",a);
console.log("a value",a.value);

// setTimeout(() => {
//     count.count.count++
//     console.log('cons', count);
//     console.log('count', count.count)
//     count.user.push('okoko')
//     a.value= 50;
// }, 3000);
setTimeout(() => {
    console.log('b', b);
    console.log('b.count', b.count)
    b.count.value++;
}, 3000);


</script>
