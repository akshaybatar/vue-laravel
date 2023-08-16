<template>
    <div class="container mt-4">
        <div class="card">
            <div class="card-body">
                <div v-for="item, index in form" :key="item">
                    <h4>Item {{ index + 1 }}</h4>
                    {{ item }}
                    <div class="row">
                        <!-- <h4>Item 1</h4> -->
                        <div class="col-sm-5">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" v-model="item.name">
                        </div>
                        <div class="col-sm-5">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" id="price" v-model="item.price">
                        </div>
                        <div class="col-sm-2 pt-4">
                            <button type="button" class="btn btn-danger btn-sm" @click="remove(index)">x</button>
                            <button type="button" class="btn btn-success btn-sm" @click="addRow">+</button>
                        </div>
                    </div >

                </div>
                <button type="button" class="btn btn-primary bt-md mt-2" @click="save">Save</button>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue';
import axios from 'axios';
export default {
    setup() {
        const form = reactive([
            {
                name: '',
                price: 0
            }
        ]);
        const addRow = () => {
            form.push({ name: '', price: 0 })

        };
        const remove = (index) => {
            if (form.length > 1) {
                form.splice(index, 1)
            }

        };
        const save  = ()=>{
         // calling server api
         axios.post('/api/item',form).then(response=>{

            console.log(response);
         })

        }





        return {
            form,
            addRow,
            remove,
            save

        }

    }
}
</script>
