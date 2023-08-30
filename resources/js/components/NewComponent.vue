<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6 mt-4">
                <h2 v-on:mousemove="get()">{{ msg }}</h2>

                <h2>Count:{{ count }}</h2>
                <button class="btn btn-primary mt-4" v-on:click="test()">Click Me</button><br>
                <!-- <button class="btn btn-primary mt-4" v-on:dblclick="test('double click')">Click Me</button> -->
                <!-- <input type="text" v-model="two"> -->
                <!-- <h3>{{ two }}</h3> -->
                <br>
                <!-- <input type="text" class="form-control" v-model="email">
                <br><br>
                <input type="text" class="form-control" v-model="password">

                <button type="button" class="btn btn-primary mt-4" v-on:click="form()">Click Me</button><br> -->
                {{ mkdata }}
                <br>
                <label for="java" class="form-label" v-bind="mkdata">Java</label>
                <input id="java" type="checkbox" value="a" class="form">

                <br>
                <label for="python" class="form-label">Python</label>
                <input type="checkbox" id="python" class="form-checkbox">
                <br>
                <label for="node" class="form-label">node</label>
                <input type="checkbox" id="node" class="form-checkbox">
                {{ hh() }}


            </div>
        </div>
    </div>
</template>
<script>

export default {

    data() {
        return {
            msg: "this is message",
            count: '0',
            two: 'by default',
            email: '',
            password: '',

            mkdata: [],

        }
    },
    methods: {

        test: function () {
            this.count++;
        },
        get: function () {

            this.msg = "message value changed"
        },
        form: function () {
            console.log("values:", this.email, this.password);

        }
        ,
        hh: function () {


            console.log('pkp');
        }


    }

}
</script>

