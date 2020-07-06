<template>
    <div class="child">
        <h1>Users Component </h1>

        <p v-html="header"></p>
        
        <p v-once>{{name}}</p>
        <h2>{{name}}</h2>
        <button v-bind:disabled="btnDisable" v-on:click="hello">Click</button>
        <h3>{{ oke ? "yes" : "no"}}</h3>
    </div>
</template>

<script>

export default {
    name : 'Users',
    data(){

        return {
                name : "Aila",
                oke : true,
                header : "<h1>Template in vue js </h1>",
                btnDisable :true
             }
    },
    methods : {
        hello(){
            this.oke=!this.oke
        }
    }
}
</script>

<style scoped>
    .child  {
  background-color: #46ab96;
    height: auto;
    width: 200px;
    padding: 30px;
    margin: 20px;
    }
</style>