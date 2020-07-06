<template>
    <div>
        <h2>Child component</h2>
        <p>{{users}}</p>

        <h3 v-for="user in users" :key="user.name">
            {{user.name}}
        </h3>
        <button v-on:click="updateTitle">Update Title</button>
    </div>
</template>
<script>
export default {
    name : "Child",
    props : ['users'],
    methods : { 
        updateTitle(){
            // console.warn('UpdateTitle')
            this.$emit('changeTitle', 'Like this video')
        }
    }
}
</script>