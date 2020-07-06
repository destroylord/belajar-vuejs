<template>
    <div>
        <form >
            <input type="text" placeholder="Enter username" v-model="signUpForm.username"> <br><br>
            <input type="password" placeholder="Enter password" v-model="signUpForm.password"> <br><br>
            <p>Hobbies</p>
            <input type="checkbox" value="travel" id="travel" v-model="signUpForm.hobbies"> 
            <label for="travel">travel</label>
            <br><br>
            <input type="checkbox" value="sports" id="sports" v-model="signUpForm.hobbies"> 
            <label for="sports">sports</label>
            <br><br>
            <p>Gender</p>
            <input type="radio" value="male" id="male" v-model="signUpForm.gender"> 
            <label for="male">male</label>
            <br><br>
            <input type="radio" value="female" id="female" v-model="signUpForm.gender"> 
            <label for="female">female</label>
            <br><br>
            <button v-on:click="signupUser">SignUp</button>
        </form>
    </div>
</template>
<script>
export default {
    name : 'SignUp',
    data(){
        return {
            signUpForm : {
                username : null,
                password : null,
                hobbies : [],
                gender : null,
            }
        }
    },
    methods : {
        signupUser(){
            console.warn("Hi", this.signUpForm)
        }
    }
}
</script>