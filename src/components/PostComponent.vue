<template>
    <div>
        <h3>Submit Form data to API</h3>
        <form @submit="submitData" method="POST">
            <input type="text" name="title" v-model="post.title" placeholder="title">
            <input type="text" name="author" v-model="post.author" placeholder="author">
            <button type="submit">Post</button>
        </form>

        <br><br>


    </div>
</template>

<script>


export default {
    name : 'PostComponent',
    data() {
        return {
            post :{
                title : null,
                author : null,
            }
        }
    },
    methods : {
        submitData(e){
            this.axios.post('http://localhost:3000/posts', this.post)
                        .then((response) => {
                            console.warn("result", response)
                        })
            e.preventDefault();
            
        }
    },

}
</script>