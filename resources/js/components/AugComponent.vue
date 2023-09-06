<template>
    <div>
        <h1>{{ msg }}</h1>
        <h1 :id="msg">hell man</h1>
        <a v-bind="obj">okokokokok</a><br />
        <a :[attribute]="url">mbnb</a><br />
        <button :disabled="isok" class="btn btn-primary">click me</button>
    </div>
</template>

<script  setup>
const isok = '';
const msg = "ok id worinf"
const url = 'https://google.com'
const attribute = 'href'
const obj = {

    id: 'okokok',

    href: 'ok.com',
    class: 'jjjj'
}

</script>
