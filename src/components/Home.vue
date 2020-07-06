<template>
    <div class="home">

        <Users/>
        <Products />

        <p><router-link to="user/1">Dafrin</router-link></p>
        <p><router-link to="user/2">Balqis</router-link></p>
        <p><router-link to="user/3">Aila</router-link></p>

        <h1>Hello from home component</h1>
        <h1>{{data}}</h1>
        <h3>{{msg}}</h3>
        <button v-on:click="hello">Call hello function</button>

        <h1>Coditional in vue js</h1>
        <h4 v-if="show">Kondisi if else</h4> 
        <h4 v-else>Else side</h4>
        <button v-on:click="display">Toogle</button>

        <h1>For Loop in vue js</h1>
        <table style="border:2px">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>email</td>
            </tr>
            <tr v-for="user in users" :key="user.id" >
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </table>

    <!-- Class and binding component -->
    <h1 class="vueStyle"> Class and Style binding</h1>
    <h1 v-bind:style="{color: colorName}"> Style binding</h1>
    <h1 v-bind:class="{display:tampil}"> Class with object</h1>
    <h1 v-bind:class="[d,v]"> Class with Array</h1>

    </div>
</template>

<script>

import Users from "./Users"
import Products from "./Products"

export default {
    name : 'Home',
    components : {
        Users,Products
    },
    props : {
        data : String,
        msg: String
    },
    methods : {
        hello(){
            console.log("Hello function called")
        },
        display(){
            this.show=!this.show
        }
    },
    data(){
        return {
            show:false,
            // data table
            users : [
                {id : 1, name : 'peter', email : 'peter@gmail.com'},
                {id : 2, name : 'tapai', email : 'tapai@gmail.com'},
                {id : 3, name : 'siska', email : 'siska@gmail.com'},
                {id : 4, name : 'windy', email : 'windy@gmail.com'}
            ],
            colorName : 'skyblue',
            tampil : true,
            d: 'display',
            v : 'vueStyle'
            
        }
    }
}
</script>

<style scoped>
    .home  {
        background-color: aqua;
        height: 500px;
    }
    .vueStyle{
        color : red;
    }
    .display{
        background-color:teal;
    }
</style>