<template>
    <div>
    <h1>Delete Post</h1>
    <table border="1px">
            <tr>
                <td>Title</td>
                <td>Author</td>
                <td>action</td>
            </tr>

            <tr v-for="p in post" v-bind:key="p.id">
                <td>{{ p.title }}</td>
                <td>{{ p.author }}</td>
                <td> <Button v-on:click="deletePost(p.id)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>


import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
    name : 'DeletePost',
    data() {
        return {
            post :{
                title : null,
                author : null,
            }
        }
    },
    methods : {
            getPost(){
            this.axios.get('http://localhost:3000/posts', this.get)
                    .then((response)=> {
                        console.log(response.data)
                        this.post=response.data
                    })
        },
            deletePost(id){
            this.axios.delete('http://localhost:3000/posts/'+id , this.delete)
                    .then((response) => {
                        console.warn(response)
                        this.getPost()
                    })
        }
  
    },    
    mounted(){
        this.getPost()
    }
}
</script>