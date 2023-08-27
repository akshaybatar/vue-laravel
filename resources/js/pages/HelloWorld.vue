<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>This is Message To Print Something... {{ 10 + 10 }}</h2>
        <h2>Checking String length in interploation "Akshay ->" {{ "Akshay".length }}</h2>

        <h2>{{ email }}</h2>

        <h2>{{ getName("function by is own data") }}</h2>
        <h3>{{ getData().name }}</h3>
        <h3>{{ getData().email }}</h3>
        <h3>{{ getData() }}</h3>

    </div>
</template>

<script >

export default {

    name: 'HelloWorld',
    props: {
        msg: String
    },
    data() {
        return {

            email: 'email1@gmail.com',
            getName: function (a) {
                return a;
                // return "This data return by a function"
            }
        }

    },
    methods: {
        getData: function () {
            return {
                name: 'akshay',
                email: this.email
            }
        }
    },


}


</script>


<!-- use scoped for same page css -->
<style>
h1 {

    color: brown;
}
</style>
