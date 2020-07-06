<template>
    <div>

        <p v-if="error.length">
            <b>Please correct the flowwing errors</b>
            <ul>
                <li v-for="e in error" v-bind:key= "e.id" >
                    {{e}}
                </li>
            </ul>
        </p>

        <form @submit="login">
            <input type="text" placeholder="Enter Username" v-model="name"> <br> <br>
            <input type="password" placeholder="Enter Password" v-model="password"> <br> <br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name : 'Validation',
        data(){
        return {
            error : [],
            name : null,
            password : null
        }
    },
    methods : {
        login(e){
            if (this.name && this.password) {
            console.log('login function called')                
            }
            this.error = [];

            if (!this.name) {
                this.error.push("name is required")
            }
            if (!this.password) {
                this.error.push("password is required")
            }
            console.warn('error', this.error)
            e.preventDefault()

            
        }
    },

}
</script>