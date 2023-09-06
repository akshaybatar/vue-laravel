<template>
    <div>
        <h1 :class="{ active: ok }"> four sep two </h1>
        <h1 :[attr]="obj"> six sep two </h1>
        <h1 :[attr]="compu"> six sep two mlmlm</h1>
    </div>
</template>
<script setup>
import { ref, reactive,computed } from 'vue'

const ok = ref(true);
const attr= 'class'
const obj = reactive({
    active: true,
    'f-bold': true
})

const compu = computed(()=>({
      active: ok.value,
      'f-bold':ok.value

}));
</script>
