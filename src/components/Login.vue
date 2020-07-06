<template>
    <div>
        <input v-model="loginForm.username" type="text" placeholder="Enter username">
        <br> <br>
        <input v-model="loginForm.password" type="password" placeholder="Enter password">
        <br> <br>
        <button v-on:click="getLogin">Login</button>
    </div>
</template>
<script>
export default {
    name : 'login',
    methods : {
        getLogin(){
            console.log('getLogin called', this.loginForm)
        }
    },
    data(){
        return {
            loginForm : {
                username : null,
                password : null
            }
        }
    }
}
</script>